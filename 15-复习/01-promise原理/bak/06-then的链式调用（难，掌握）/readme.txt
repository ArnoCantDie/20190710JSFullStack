then可以链式调用，多个then时，如果走到下一个then的失败回调？
答：1，返回一个失败的promse  2，抛出一个错误

then可以链式调用，多个then时，如何终止下一个then的调用？
答：返回一个处于pending状态的promise
