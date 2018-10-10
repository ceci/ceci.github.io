Code Review workshop for Agile Brazil 2018
==========================================

## Code Review examples

### Basics

* Naming: variables, methods, classes
* Duplication: unnecessary conditions, Java misuse, old code (Date?)
* Complexity: LoC, loops and conditions

*Exercise 1:* all those could be only one big bad commit. It will bring up opportunities to discuss:
  - basic improvement points vs. shallow comments;
  - too many items in a single code review;
  - Discussion: taking person knowledge level into consideration.

### Reminders

* Code that we found nothing to complain about

*Exercise 2:* good code happens too. This discusses:
  - you don't have to say anything;
  - you can cumpliment good practices.

### Looking for bugs (missing tests too)

* Uncovered corner cases: null check of nullables?
* Missing test on code that actually works
* Code that might be hard to maintain

*Exercise 3:* liabilities --> also print SessaoTest.java
  - Looking for bugs is part of it;
  - Tests are code, too;
    - The PR isn't always enough
  - Discussion: Future matters.

### High level

* Contract breaking changes (kinda impossible in this repo)
* Design discussion: something with cohesion problems?
* Query that could be way better

*Exercise 4:* one small code per item, to be discussed with people from your table in depth.
  - Code reviews can be an invitation for a face to face discussion.