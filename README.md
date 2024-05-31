## Attempt to implement `React.use` to fetch inline

Based on @jherr video about `React.cache`. 

https://youtu.be/T3m-MZkuadU?si=fVnsUKn18uubUsh5

When trying to abstract away the cached function into a reusable lib.

### Error case:
When passing a dynamic parameter such as a primitive value the fetch still works.
when passing any kind of array or object it reverts back to the usual infinite fetching cycle.

If anyone knows how to fix this feel free to open a PR