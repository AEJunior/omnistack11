import React from 'react';
//in function parameters Header(props), é possível desestruturar o variável de entrada
export default function Header({children}){
    return(
        /**
         * v2 = or in 'header' tag
         *  '<h1>Be the hero</h1>
         * 
         * v3 = Para injetar propriedades é necessário o uso de chaves => {}
         *  <header>
                <h1>{props.title}</h1>
            </header>

            v4 = Pegando elemento desacoplado
            <header>
                <h1>{children}</h1>
            </header>
         */
        <header>
                <h1>{children}</h1>
        </header>
    );
}

//or 'export default Header;' na linha final;