describe("Suíte de testes do toBe", function(){

    var valorBooleano = true;
    var valorBooleanoCopia = valorBooleano;
    var valorBooleanoTexto = "true";
    var obj1 = { 'Valor': valorBooleano};
    var obj2 = { 'Valor': valorBooleano};
// === valor e o tipo e == apenas compara valores (toEqual)
    it ("Deve validar o uso do matcher 'toBe'",function(){
        expect(valorBooleano).toBe(true);
        expect(valorBooleanoCopia).toBe(valorBooleano);
        expect(valorBooleanoTexto).tobe(valorBooleanoTexto);
        expect(valorBooleanoTexto).toBe("True");
        expect(obj1).not.toBe(obj2);
    });
});

describe("Suíte de testes do toEqual", function(){

    var valorBooleano = true;
    var valorBooleano2 = true;
    var valorBooleanoCopia = valorBooleano;
    var valorBooleanoTexto = "true";
    var obj1 = { 'Valor': valorBooleano};
    var obj2 = { 'Valor': valorBooleano};
    it ("Deve validar o uso do matcher 'toEqual'",function(){
        expect(valorBooleano).toEqual(true);
        expect(valorBooleano).toEqual(valorBooleano2);
        expect(valorBooleanoCopia).toEqual(valorBooleano);
        expect(valorBooleano).toEqual(valorBooleanoTexto);
        expect(valorBooleanoTexto).toEqual("True");
        expect(obj1).not.toEqual(obj2);
    });
});