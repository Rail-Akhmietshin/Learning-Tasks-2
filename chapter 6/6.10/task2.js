function f() {
    console.log(this.name);
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

f();        // привязка к контексту происходит только в первый раз. Попытка повторной привязки не имеет смысла