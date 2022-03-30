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

describe ("Suíte do toMatch",function(){
    var textoComparar = "Curso de testes com Jasmine";
    it ("deve validar o uso do matcher 'toMatch'",function(){
        expect(textoComparar).toMatch(/Jasmine/);
        expect(textoComparar).toMatch(/Jasmine/);
        expect(textoCompararCopia).toMatch(/Jasmine/i);
        expect(textoComparar).toMatch(/Javascript/);
        expect ("14//12/2016").toMatch(/^\d{2}\/\d{2\/\d{4}$/);
    });
});

describe ("Suíte do testes toBeDefined",function(){
    var numero = 10;
    var texto;
    var obj = {'valor' : 10};
    it ("deve validar o uso do matcher 'toBeDefined'",function(){
        expect(numero).toBeDefined();
        expect(texto).toBeDefined();
        expect(obj.valor).toBeDefined();
        expect(obj.mensagem).not.toBeDefined();
    });
});


describe("Suíte de testes do toBeUndefined", function(){
    var numero = 10;
    var texto;
    var obj = {'valor':10};
    it("Deve validar o uso do macther 'toBeUndefines'", function(){
        expect(texto).toBeUndefined();
        expect(numero).not.toBeUndefined();
        expect(obj.mensagem).toBeUndefined();
        expect(obj.valor).not.toBeUndefined();
    });
});


describe("Suít de testes do toBeNull", function(){
    var objeto = null;
    var texto;
    var numero = 10;

    it("Deve validar o uso de matcher 'toBeNull'", function(){
        expect(objeto).toBeNull();
        expect(numero).not.toBeNull();
        expect(texto).not.toBeNull();
        expect(objeto).not.toEqual(texto);
    });
});


describe("Suíte de testes do toBeTruthy", function(){
    var objeto = {'valor': 123};
    var texto;
    var numero = 10;

    it("deve validar o uso do matcher 'toBeTruthy'", function(){
        expect(objeto).toBeTruthy();
        expect(numero).toBeTruthy();
        expect(texto).not.toBeTruthy();
    });
});


describe("Suíte de testes do toBeFalsy", function(){
    var numero = 10;

    it("Deve validar o uso do matcher 'toBeFalsy'", function(){
        expect(false).toBeFalsy();
        expect("").toBeFalsy();
        expect(0).toBeFalsy();
        expect(undefined).toBeFalsy();
        expect(null).toBeFalsy();
        expect(NaN).toBeFalsy();
        expect("false").not.toBeFalsy();
    });
});

describe ("Suíte de testes dp ToContain", function(){
    var nomes = ["Fulano", "Ciclano", "Beltrano"];
    var nomesText = "Fulano Ciclano Beltrano";
    it("deve validar o uso do matcher 'to contain'", function(){
        expect(nomes).toContain("Ciclano");
        expect(nomesTexto).toContain("Fulano");
        expect(nomesTextos).toConatin("Bel");
        expect(nomes).not.toConatin("Maria");
        expect(nomes).not.toConatin("ciclano");
    });
});

describe ("Suite de tesets do toBeLessThan", function(){
    const PI = 3.1415;
    var numero = 2;
    it("deve validar o uso do matcher 'toBeLessThan'", function(){
        expect(numero).toBeLessThan(PI);
        expect("1.2").toBeLessThan(PI);
        expect(5).not.toBeLessThan(PI);
        expect(PI).not.toBeLessThan(PI);
    });
});

describe ("Suite de testes do toBeGreaterThan", function(){
    const PI = 3.1415;
    var numero = 4;
    it("deve validar o uso do matcher 'toBeGreaterThan'", function(){
        expect(numero).toBeGreaterThan(PI);
        expect("3.2").toBeGreaterThan(PI);
        expect(2).not.toBeGreaterThan(PI);
        expect(PI).not.toBeGreaterThan(PI);
    });
});

describe ("Suite de testes do toThrow", function(){
    var comErro = function(){
    return numero * 10;
    };
    var semErro = function(numero){
    return numero * 10;
    };
    it("deve validar o uso do matcher 'toThrow'", function(){
        expect(comErro).toThrow();
        expect(semErro).not.toThrow();
    });
});

describe("Suíte de testes do matcher 'toThrowError'", function(){
    var calcularDobro = function(numero) {
        if(numero <= 0){
            throw new TypeError("o numero deve ser maior que 0.");
        }
        return numero * numero;
    };
    it ("deve validar o uso do matcher 'toThrowError'",function(){
        expect(function() {calcularDobro(0) }).toThrowError();
        expect(function() {calcularDobro(0) }).toThrowError("o numero deve ser maior que 0.");
        expect(function() {calcularDobro(0) }).toThrowError(/ maior que 0/);
        expect(function() {calcularDobro(0) }).toThrowError(TypeError);
        expect(function() {calcularDobro(0) }).toThrowError(TypeError, "o numero deve ser maior que 0.");
        expect(calcularDobro).not.toThrowError();
    });
});