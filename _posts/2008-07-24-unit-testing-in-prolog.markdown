---
layout: post
title:  "Unit testing in PROLOG"
comments: true
tags: [personal,testing]
---


Finally I'm sitting down to be done with my Computer Science degree. I've been studying in the Israeli Open University starting 2003, while working full time and more. Over than two years ago I reached the point of having literally no time at all to finish it up, so I left it to be with only two final projects to complete, present and defend. 

The first one is to write a simple AI enabled game (using depth delimited alpha-beta algorithm variation) , in PROLOG.



Back when I took that course, the whole paradigm was too strange to me. I've been doing procedural and OO coding for years, and the look of the programs just looked .... wrong.

Nowadays that I developed a lot of curiosity into declarative languages like Erlang and F#, (and being a much better and way more experienced developer) I can relate to that type of coding more easily.



So, dusting the rust of two year of not touching it at all, I sat down today to start working on that project (delivery is next month), I started with writing down a small helper for running unit tests on my code.



Ain't pretty, but it serves both the need to test my code, and the need to re-learn the language:



```

run_tests :- dynamic([ tests_passed/1, failing_tests/1, total_tests_passed/1, total_failing_tests/1 ]), assert(tests_passed(0)), assert(failing_tests([])), assert(total_tests_passed(0)), assert(total_failing_tests([])), bagof( (Module/Predicate, Tests),  tests(Module/Predicate, Tests),  TestDefinitions), run_tests_definitions(TestDefinitions), retract(total_tests_passed(TotalPassedAtEnd)),  retract(total_failing_tests(TotalFailedAtEnd)), len(TotalFailedAtEnd, TotalFailedAtEndCount), write('summary:'), nl, write('Passed: '), write(TotalPassedAtEnd),  write(' Failed: '), write(TotalFailedAtEndCount), nl, nl, (TotalFailedAtEndCount> 0, write_fails(TotalFailedAtEnd) ; write('Alles Gut'), nl). run_tests_definitions([]) :- !.run_tests_definitions([(Module/Predicate, Tests)|T]) :- write('module: '), write(Module),  write(' predicate: '), write(Predicate), write(' ... '), run_tests(Tests), retract(tests_passed(Passed)),  retract(failing_tests(Failed)), assert(tests_passed(0)), assert(failing_tests([])), len(Failed, FailedCount), write('Passed: '), write(Passed),  write(' Failed: '), write(FailedCount), nl,  retract(total_tests_passed(TotalPassed)),  retract(total_failing_tests(TotalFailed)), NewTotalPassed is TotalPassed + Passed, conc(Failed, TotalFailed, NewTotalFailed), assert(total_tests_passed(NewTotalPassed)),  assert(total_failing_tests(NewTotalFailed)), run_tests_definitions(T). 

write_fails([]) :- !.write_fails([H|T]) :-  write_fails(T), write(H), write(' failed'), nl. run_tests([]) :- !.run_tests([H|T]) :- run_test(H), run_tests(T). 



run_test(Test) :- call(Test),!, tests_passed(X), retract(tests_passed(X)),  NewX is X + 1, assert(tests_passed(NewX)).run_test(Test) :- failing_tests(X), retract(failing_tests(X)), NewX = [Test|X], assert(failing_tests(NewX)). % Assertsassert_all_members_equal_to([], _).assert_all_members_equal_to([H|T], H) :- assert_all_members_equal_to(T, H). 

```



this code is allowing me to define my tests like the following:

```

tests(moves/change_list, [ change_list__add_first__works, change_list__add_middle__works, change_list__add_last__works, change_list__empty_first__works, change_list__add_middle__works, change_list__add_last__works]). 
change_list__add_first__works :- L = [1,1,1],change_list(L, L1, 1, add), L1 = [2,1,1]. change_list__add_middle__works :- L = [1,1,1],change_list(L, L1, 2, add), L1 = [1,2,1].



...

```



invoking the tests is as simple as the predicate:

```
:- run_tests.
```



and the current output from my project is:

```
module: utils predicate: in_range ... Passed: 4 Failed: 0module: utils predicate: create_list ... Passed: 2 Failed: 0module: moves predicate: change_list ... Passed: 6 Failed: 0module: moves predicate: move ... Passed: 1 Failed: 0module: moves predicate: step ... Passed: 1 Failed: 1summary:Passed: 14 Failed: 1 
step__when_ends_within_same_player_pits__works failedyes
```



Ahm. A failing test .... back to work I guess. 



btw, The game I am implementing is [Kalah](http://www.wikimanqala.org/wiki/Kalah). 

