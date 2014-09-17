---
layout: post
title:  "Using nhibernate's named queries with ActiveRecord"
comments: true
tags: [castle,activerecord,nhibernate,hql]
---


One of the methods of querying the DB when using NHibernate, is to issue [HQL](http://www.hibernate.org/hib_docs/reference/en/html/queryhql.html) queries. HQL stands for "Hibernate Query Language". It has a SQL-like syntax and is very intuitive for people with SQL background.



The way this works is that NHibernate 'compiles' the HQL query into SQL, and then issues the SQL query (using ADO.NET's facilities) to the DB.



Sounds pricey?

enter Named Queries.

now these are HQL (or SQL) queries, each has a name (obviously), that are been supplied to NH through the mapping. The queries are being translated and cached as IDbCommand objects as part of the framework initialisation, which mean that you get rid of the HQL->SQL overhead throughout the life of the process.



One other major benefit, is that the mechanism to actually execute these named queries, does not differentiate between HQL and SQL queries (for the simple fact that these queries have already been transferred to SQL at runtime). That gives you the possibility to replace HQL queries into tighter SQL queries (with the same parameters and which returns the same resultset) should your DBA figure out a better one.



But if you're using ActiveRecord, you usually do not have direct access into the mapping (.hbm) files. So how would you use named queries with AR?



enter HqlNamedQueryAttribute (not such a great name, as I did state that it would also work for SQL queries).



So, for an example, on this blog's source code, within PostRepository.cs you'd see this code:

```

...



#region queries[assembly: HqlNamedQuery(Queries.FindPostsInArchive, Queries.FindPostsInArchive)][assembly: HqlNamedQuery(Queries.FindByUrlFriendlyTagName, Queries.FindByUrlFriendlyTagName)]namespace KenEgozi.Com.Domain{ internal partial class Queries { internal const string FindPostsInArchive = @" from Post p where  year(p.Lifecycle.CreationDate) = :year and month(p.Lifecycle.CreationDate) = :month  order by p.Lifecycle.CreationDate desc"; internal const string FindByUrlFriendlyTagName = @" select p  from  Post p  join p.Tags t where t.UrlFriendlyName like :urlFriendlyTagName order by p.Lifecycle.CreationDate desc;"; }}#endregion

...




 public ICollection<Post> FindInArchive(int year, int month) { 

 return session .GetNamedQuery(Queries.FindPostsInArchive) .SetParameter("year", year) .SetParameter("month", month) .List<Post>(); }

...

```

Queries class is marked as partial, as other queries might be presented on other repositories or services that would need to add more named queries. I considered grouping of queries into groups by the using repository, or by aggregate roots, but the thing is - having all of the queries under the same namespace helps discoverability, and helps with preventing duplications

