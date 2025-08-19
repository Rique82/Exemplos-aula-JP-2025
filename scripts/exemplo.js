// const element = document.getElementById("exemplo-get");
        // element.style.color = 'blue';

        // const novaH1 = document.createElement('h1');
        // novaH1.textContent = "NOVO ELEMENTO H1 NA TELA";
        // console.log("Novah1 ===>", novaH1);

        // element.appendChild(novaH1);

        // const header = document.getElementById("cabeça");
        // header.style.backgroundColor = '#000';

        // const footer = document.getElementById("letrao");
        // footer.style.fontSize = '10px';

        // const buttonExemploJS = document.getElementById("buttonExemploJS");
        // buttonExemploJS.addEventListener('click', () => {
        //     prompt("digite um numero");
        // });


        // const form = document.querySelector("form");
        // form.addEventListener('submit', (event) => {
        //     event.preventDefault();
        //     console.log('batatata')
        // });

        // const header = document.getElementById("cabeça");
        // header.addEventListener('mouseover', () => {
        //     // alert("nao podi");
        // });

        // document.addEventListener('keydown', (event) => {
        //     console.log(`Tecla clicada ${event.key}`);
        // });

        
        let i = 4;
        const adicionar = document.getElementById("adicionar")
        adicionar.addEventListener('click', () => {

            const listaNO = document.getElementById("lista-NO");
            const novoLi = document.createElement('li');
            novoLi.textContent = `novo item ${i++}`;
            listaNO.appendChild(novoLi);

        });