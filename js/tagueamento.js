// TESTE TÉCNICO - ISMAEL FERNANDES ROJAS
document.addEventListener('DOMContentLoaded', function(){ 

    const page_location = window.location.href

    document.querySelector('a[href*="/contato"]').addEventListener('click', function(){
        gtag('event', 'click', {
           'page_location': page_location,
           'element_name': 'entre_em_contato',
           'element_group': 'menu'
        });
    });

    document.querySelector('a[href*="autos_revista_vfinal"]').addEventListener('click', function () {
        gtag('event', 'file_download', {
            'page_location': page_location,
            'element_name': 'download_pdf',
            'element_group': 'menu'
        });
    });

    if (window.location.href.includes('analise.html')) {

        const cardTitle = document.querySelectorAll('.card-montadoras .card-title')

        cardTitle.forEach(function (card) {
            card.addEventListener('click', function () {
               
                gtag('event', 'click', {
                    'page_location': page_location,
                    'element_name': card.innerText,
                    'element_group': 'ver_mais'
                });
            })
        });
       

    }

    if (window.location.href.includes('sobre.html')) {

        const form = document.querySelector('form')
        const form_id = form.getAttribute('id')
        const form_name = form.getAttribute('name')
        const form_destination = form.getAttribute('action')

        form.addEventListener('focusin', function () {
            gtag('event', 'form_start', {
                'page_location': page_location,
                'form_id': form_id,
                'form_name': form_name,
                'form_destination' : form_destination
            });
        });     

        form.addEventListener('submit', function () { 
            gtag('event', 'form_submit', {
                'page_location': page_location,
                'form_id': form_id,
                'form_name': form_name,
                'form_destination' : form_destination,
                'form_submit_text': document.querySelector('[type="submit"]').innerText
            });
        });

                     
        (function formValidation(){
        
            if(document.body.innerText.includes('Obrigado pelo seu contato')){
                               
                gtag('event', 'view_form_success', {
                    'page_location' : page_location,
                    'form_id': form_id,
                    'form_name': form_name
                });
        
            } else {
                setTimeout(formValidation, 1000);
            }
                })();
        

    }

});