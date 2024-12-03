document.addEventListener('DOMContentLoaded', function () {
    const carros = [
        { modelo: 'Fusca', marca: 'Volkswagen', ano: 2020, preco: 25000, cambio: 'Manual', img: 'imagens/images.jpg', descricao: 'Fusca 2020, excelente estado.' },
        { modelo: 'Gol', marca: 'Volkswagen', ano: 2021, preco: 30000, cambio: 'Automático', img: 'imagens/Gol 2021.webp', descricao: 'Gol 2021, baixo km.' },
        { modelo: 'Civic', marca: 'Honda', ano: 2020, preco: 50000, cambio: 'Automático', img: 'imagens/civic2020.png', descricao: 'Civic 2020, carro de luxo.' },
        { modelo: 'Fusca', marca: 'Volkswagen', ano: 2021, preco: 28000, cambio: 'Manual', img: 'imagens/fusca2021-removebg-preview.png', descricao: 'Fusca 2021, novinho.' },
        { modelo: 'Astra', marca: 'Chevrolet', ano: 2019, preco: 22000, cambio: 'Manual', img: 'imagens/Astra 2019.jpg', descricao: 'Astra 2019, completo.' },
        { modelo: 'Focus', marca: 'Ford', ano: 2020, preco: 45000, cambio: 'Automático', img: 'imagens/ford focus 2020.jpg', descricao: 'Focus 2020, muito conservado.' },
        { modelo: 'Onix', marca: 'Chevrolet', ano: 2021, preco: 35000, cambio: 'Automático', img: 'imagens/onix 2021.jpg', descricao: 'Onix 2021, econômico.' },
        { modelo: 'Corolla', marca: 'Toyota', ano: 2020, preco: 60000, cambio: 'Automático', img: 'imagens/Corolla_2020__completo_e_confortável.-removebg-preview.png', descricao: 'Corolla 2020, completo e confortável.' },
        { modelo: 'Fiat Uno', marca: 'Fiat', ano: 2021, preco: 22000, cambio: 'Manual', img: 'imagens/fiat2021.webp', descricao: 'Fiat Uno 2021, compacto e econômico.' },
        { modelo: 'Jeep Compass', marca: 'Jeep', ano: 2020, preco: 100000, cambio: 'Automático', img: 'imagens/Compass-Sport-2021-03.jpg', descricao: 'Jeep Compass 2020, SUV de luxo.' },
        { modelo: 'CrossFox', marca: 'Volkswagen', ano: 2012, preco: 39000, cambio: 'Manual', img: 'imagens/crossfox 2012.webp', descricao: 'Hatch aventureiro, prata, rack de teto.' },
        
        { modelo: 'Fiat Strada', marca: 'Fiat', ano: 2021, preco: 70000, cambio: 'Manual', img: 'imagens/strada2021.webp', descricao: 'Fiat Strada 2021, para trabalho.' },
        { modelo: 'Renegade', marca: 'Jeep', ano: 2022, preco: 120000, cambio: 'Automático', img: 'imagens/renegade2021.png', descricao: 'Jeep Renegade, SUV compacto.' },
        { modelo: 'S10', marca: 'Chevrolet', ano: 2020, preco: 150000, cambio: 'Automático', img: 'imagens/s10 2021.webp', descricao: 'S10 2020, para aventura.' },
        { modelo: 'Amarok', marca: 'Volkswagen', ano: 2023, preco: 250000, cambio: 'Automático', img: 'imagens/amarok2023.webp', descricao: 'Amarok 2023, diesel.' },
        { modelo: 'Hilux', marca: 'Toyota', ano: 2021, preco: 200000, cambio: 'Automático', img: 'imagens/hilux2021.webp', descricao: 'Hilux 2021, resistente.' },
        { modelo: 'HB20', marca: 'Hyundai', ano: 2022, preco: 80000, cambio: 'Automático', img: 'imagens/hb2022.webp', descricao: 'HB20 2022, econômico e estiloso.' },
        { modelo: 'Kwid', marca: 'Renault', ano: 2021, preco: 45000, cambio: 'Manual', img: 'imagens/kwid2021.png', descricao: 'Kwid 2021, compacto.' },
        { modelo: 'Cruze Station Wagon', marca: 'Chevrolet', ano: 2018, preco: 125000, cambio: 'Automático', img: 'imagens/cruze2018', descricao: 'Câmbio automático, cor preta, motor 1.4 turbo, rodas aro 17..' },
        { modelo: 'Polo', marca: 'Volkswagen', ano: 2023, preco: 95000, cambio: 'Automático', img: 'imagens/polo2023    ', descricao: 'Polo 2023, moderno e completo.' },
        { modelo: 'Duster', marca: 'Renault', ano: 2021, preco: 110000, cambio: 'Automático', img: 'imagens/duster2021.png', descricao: 'Duster 2021, espaçoso.' },
        { modelo: 'EcoSport', marca: 'Ford', ano: 2020, preco: 95000, cambio: 'Automático', img: 'imagens/Ecosport2020.png', descricao: 'EcoSport 2020, ótimo custo-benefício.' },
        { modelo: 'Argo', marca: 'Fiat', ano: 2022, preco: 78000, cambio: 'Automático', img: 'imagens/argo2022.webp', descricao: 'Fiat Argo 2022, versátil.' },
        { modelo: 'Voyage', marca: 'Volkswagen', ano: 2021, preco: 55000, cambio: 'Manual', img: 'imagens/voyage2021.png', descricao: 'Voyage 2021, sedan.' },
        { modelo: 'Celta', marca: 'Chevrolet', ano: 2018, preco: 20000, cambio: 'Manual', img: 'imagens/celta2018.jpg', descricao: 'Celta 2018, baixo custo.' },
        { modelo: 'Toro', marca: 'Fiat', ano: 2021, preco: 140000, cambio: 'Automático', img: 'imagens/toro2021.webp', descricao: 'Toro 2021, picape robusta.' },
        { modelo: 'Spin', marca: 'Chevrolet', ano: 2020, preco: 75000, cambio: 'Automático', img: 'imagens/spin2020.webp', descricao: 'Spin 2020, para família.' },
        { modelo: 'Tucson', marca: 'Hyundai', ano: 2020, preco: 115000, cambio: 'Automático', img: 'imagens/tucson2020.png', descricao: 'Tucson 2020, SUV confortável.' },
        { modelo: 'Ranger', marca: 'Ford', ano: 2021, preco: 180000, cambio: 'Automático', img: 'imagens/ranger2021.webp', descricao: 'Ranger 2021, diesel.' },
        { modelo: 'A3', marca: 'Audi', ano: 2020, preco: 150000, cambio: 'Automático', img: 'imagens/audiA32020.png', descricao: 'Audi A3 2020, luxo.' },
        { modelo: 'Compass', marca: 'Jeep', ano: 2017, preco: 90000, cambio: 'Automático', img: 'imagens/compass2017.webp', descricao: 'Compass 2017,preto, Suv.' },
        { modelo: 'Kombi', marca: 'Volkswagen', ano: 2013, preco: 35000, cambio: 'Manual', img: 'imagens/kombi2013.jpg', descricao: 'Kombi 2013, clássico.' },
        { modelo: 'Captur', marca: 'Renault', ano: 2022, preco: 120000, cambio: 'Automático', img: 'imagens/captur2022.jpg', descricao: 'Captur 2022, completo.' },
        { modelo: 'HR-V', marca: 'Honda', ano: 2021, preco: 130000, cambio: 'Automático', img: 'imagens/HRV2021.jpg', descricao: 'HR-V 2021, SUV esportivo.' },
        { modelo: 'Ka', marca: 'Ford', ano: 2021, preco: 65000, cambio: 'Manual', img: 'imagens/ka2021.webp', descricao: 'Ka 2021, econômico.' },
        { modelo: 'Virtus', marca: 'Volkswagen', ano: 2022, preco: 125000, cambio: 'Automático', img: 'imagens/virtus2022.jpg', descricao: 'Virtus 2022, sedan.' },
        { modelo: 'Palio', marca: 'Fiat', ano: 2018, preco: 30000, cambio: 'Manual', img: 'imagens/palio2018.webp', descricao: 'Palio 2018, básico e econômico.' },
        { modelo: '320i', marca: 'BMW', ano: 2020, preco: 250000, cambio: 'Automático', img: 'imagens/bmw2020.webp', descricao: 'BMW 320i 2020, alta performance.' },
        { modelo: 'Etios', marca: 'Toyota', ano: 2020, preco: 50000, cambio: 'Manual', img: 'imagens/etios2020.png', descricao: 'Etios 2020, robusto e econômico.' }
    ];



    let indexCarroAtual = 0; // Índice inicial para o destaque de carros
    const carrosDestaque = document.querySelector('.carros-destaque');
    const filtroForm = document.getElementById('filtro-form');

    // Função para renderizar carros
    function renderCarros(listaCarros) {
        carrosDestaque.innerHTML = ''; // Limpa os carros exibidos
        listaCarros.forEach((carro) => {
            const divCarro = document.createElement('div');
            divCarro.classList.add('carro');
            divCarro.innerHTML = `
                <img src="${carro.img}" alt="${carro.modelo}">
                <h4>${carro.modelo} ${carro.ano}</h4>
                <p>Preço: R$ ${carro.preco}</p>
            `;
            divCarro.addEventListener('click', () => abrirPopup(carro)); // Evento para abrir detalhes
            carrosDestaque.appendChild(divCarro);
        });
    }

    // Função para abrir o popup de detalhes
    function abrirPopup(carro) {
        const popup = document.getElementById('popup-detalhes');
        const detalhes = document.getElementById('detalhes-carro');
        const imagemCarro = document.getElementById('imagem-carro');

        detalhes.innerHTML = `
            <h3>${carro.modelo} ${carro.ano}</h3>
            <p><strong>Marca:</strong> ${carro.marca}</p>
            <p><strong>Preço:</strong> R$ ${carro.preco}</p>
            <p><strong>Câmbio:</strong> ${carro.cambio}</p>
            <p><strong>Descrição:</strong> ${carro.descricao}</p>
        `;
        imagemCarro.src = carro.img;
        popup.style.display = 'flex';
    }

    // Função para fechar o popup
    function fecharPopup() {
        const popup = document.getElementById('popup-detalhes');
        popup.style.display = 'none';
    }

    // Filtragem de carros
    filtroForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const { modelo, marca, ano, preco, cambio } = filtroForm;
        const carrosFiltrados = carros.filter((carro) =>
            (!marca.value || carro.marca.includes(marca.value)) &&
            (!ano.value || carro.ano == ano.value) &&
            (!preco.value || carro.preco <= parseInt(preco.value)) &&
            (!cambio.value || carro.cambio === cambio.value)
        );
        renderCarros(carrosFiltrados);
    });

    // Inicialização
    document.getElementById('fechar-popup').addEventListener('click', fecharPopup);
    renderCarros(carros);

    
});
