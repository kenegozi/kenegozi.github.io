---
layout: post
title:  "Executing Plain ol' SQL in ActiveRecord Transaction"
comments: true
tags: [castle,activerecord]
---


I'm getting asked for this a lot (lately on the Castle's usergroup, and on many other occasions)



You friend is [ActiveRecordMediator.Execute](http://api.castleproject.org/html/M_Castle_ActiveRecord_ActiveRecordMediator_Execute.htm)



So here is a sample:

```

ActiveRecordMediator.Execute(typeof(ActiveRecordBase), delegate (NHIbernate.ISession session, object data){ IDbConnection con = session.Connection; IDbCommand cmd = con.CreateCommand();



   // That's the key part - joining the current AR transaction scope session.Transaction.Enlist(cmd); 



   // now you have a IDbCommand instance - use it at will

}, null);

```

If you want to create a proper method for handling the delegate instead of the anonymous one, then you can pass data in there (using the third argument) and it would get into the delegate as the "object data" thing.

