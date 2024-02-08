let buscador = document.getElementById("search");
        let textoLogo = document.getElementById("textoLogo");
        buscador.addEventListener("keyup", function(){
            let cont=0;
            Array.from(document.getElementsByTagName("p")).forEach(elemen => {
                // console.log("buscador: ", buscador.value)
                console.log("elementos: ", elemen.childNodes[0])
                const htmlOriginal = elemen.innerText;
                if(elemen.innerText.includes(buscador.value) && buscador.value != '') {
                    console.log("elementos2: ", elemen.childNodes[0]);
                    console.log("original: ", htmlOriginal);

                    htmlNuevo = htmlOriginal.replaceAll(buscador.value, '<span style="background-color: yellow;">'+buscador.value+'</span>')
                    // console.log("html: ", htmlAnt)
                    // document.getElementsByClassName("gray-text")[0].innerHTM.Lreplace(buscador.value, '<span style="background-color: yellow;">'+buscador.value+'</span>')
                    elemen.innerHTML = htmlNuevo;
                    cont = cont + 1;
                }
            })
            textoLogo.text = "Se encontraron " + cont;
        })