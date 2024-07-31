const listaFormacoes = [
	{
		titulo: 'Formação A partir do zero: HTML e CSS para projetos web',
		horas: '51',
		certificado: 'https://cursos.alura.com.br/degree/certificate/69d34201-6a94-45ff-9d8d-4557d465aeb2'
	},
	{
		titulo: 'Formação CSS: aprofunde em estilos',
		horas: '36',
		certificado: 'https://cursos.alura.com.br/degree/certificate/2f4997a0-f4a4-418a-97c4-dfe5447b3046'
	},
	{
		titulo: 'Formação Bootstrap 5: desenvolvimento de websites responsivos e atraentes',
		horas: '15',
		certificado: 'https://cursos.alura.com.br/degree/certificate/62fd4445-6b93-4373-9758-ba8785bd3108'
	},
	{
		titulo: 'Formação Desenvolva aplicações Web com JavaScript',
		horas: '60',
		certificado: 'https://cursos.alura.com.br/degree/certificate/847de1a0-8f1c-48c9-9632-07be13c663d7'
	},
	{
		titulo: 'Formação Desenvolva aplicações Web em JavaScript com tarefas concorrentes e orientadas a objetos',
		horas: '23',
		certificado: 'https://cursos.alura.com.br/degree/certificate/c235133b-397d-4ae0-ad20-9fec7869bca1'
	},
	{
		titulo: 'Formação Explore React com JavaScript',
		horas: '65',
		certificado: 'https://cursos.alura.com.br/degree/certificate/f4ce459c-e89a-4193-8d1c-80e4a5511d05'
	},
	{
		titulo: 'Formação Melhore sua experiência de desenvolvimento com TypeScript',
		horas: '31',
		certificado: 'https://cursos.alura.com.br/degree/certificate/253d71b2-5e85-494e-a23c-660f1839bdf2'
	},
	{
		titulo: 'Formação Gerencie aplicações React com TypeScript',
		horas: '79',
		certificado: 'https://cursos.alura.com.br/degree/certificate/degree-react-ts-v581770-581770/certificate'
	},
	{
		titulo: 'Formação Desenvolva aplicações Web e Mobile com React e React Native',
		horas: '36',
		certificado: 'https://cursos.alura.com.br/degree/certificate/6095d863-aa95-48b0-b673-01e7636e48b6'
	},
	{
		titulo: 'Formação React: desenvolva aplicações web usando JSX e Hooks',
		horas: '58',
		certificado: 'https://cursos.alura.com.br/degree/certificate/df3b3542-d661-4b8d-a9ed-4b8f56607d70'
	},
	{
		titulo: 'Formação Full stack JavaScript: crie um projeto com React e Node.js',
		horas: '28',
		certificado: 'https://cursos.alura.com.br/degree/certificate/8adf9cdd-7c7a-48c2-ae96-9dd8098e3504'
	},
	{
		titulo: 'UI Design para Iniciantes',
		horas: '34',
		certificado: 'https://www.origamid.com/certificate/01f42c23'
	}
]

const listaProjetos = [
	{
		titulo: 'Clonexo',
		descricao: 'Projeto feito para a gincana de férias da empresa onde meu primo trabalha, sendo uma cópia básica do jogo conexo.ws. ',
		imagem: './assets/imgs-projetos/clonexo.jpg',
		tecs: ['React', 'HTML', 'TypeScript', 'SCSS'],
		links: {
			repositorio: "https://github.com/JoaoDognini/conexo-clone",
			deploy: "https://conexo-clone.vercel.app/"
		},
	},
	{
		titulo: 'Organo',
		descricao: 'Site feito para curso da Alura, de forma simples para possibilitar a criação de equipes, podendo cadastrar novos usuários e classificar a equipe que fazem parte.',
		imagem: './assets/imgs-projetos/organo.png',
		tecs: ['React', 'HTML', 'TypeScript', 'SCSS'],
		links: {
			repositorio: "https://github.com/JoaoDognini/organo",
			deploy: "https://organo-joao.vercel.app/"
		},
	},
	{
		titulo: 'Aluroni',
		descricao: 'Site projeto do curso da Alura, utilizando uma interface simples para conhecer mais sobre o restaurante e também o cardápio, podendo buscar, filtrar e ordenar os pratos conforme requisitado.',
		imagem: './assets/imgs-projetos/aluroni.png',
		tecs: ['React', 'HTML', 'TypeScript', 'SCSS'],
		links: {
			repositorio: "https://github.com/JoaoDognini/aluroni",
			deploy: "https://aluroni-joao.vercel.app"
		},
	}
]

const listaCursos = document.getElementById('lista_cursos');
const listaProjeto = document.getElementById('lista_projetos');

function criaListaCursos() {
	listaFormacoes.map(curso => {
		listaCursos.innerHTML += `
			<li class="lista_cursos_item">
				<p>${curso.titulo}</p>
				<div class="lista_cursos_item_certificado">
					<a href="${curso.certificado}" target="_blank" style="color: beige;">
						<img src="${'../assets/certificado.svg'}" alt="Certificado"/>
					</a>
					<span>${curso.horas}h</span>
				</div>
			</li>
		`
	})
}

function criaListaProjetos() {
	listaProjetos.map(projeto => {
		listaProjeto.innerHTML += `
			<li>
				<div class="projetos_card">
					<div class="projetos_card_topo">
						<div class="projetos_card_topo_textos">
							<h1>${projeto.titulo}</h1>
							<p>${projeto.descricao}</p>
						</div>
						
						<img src=${projeto.imagem} alt="Imagem do ${projeto.titulo}" />
					</div>
					<div class="projetos_card_inferior">
						<div class="projetos_card_inferior_botoes">
							<a class="botao_projeto" href=${projeto.links.deploy}>Deploy</a>
							<a class="botao_projeto" href=${projeto.links.repositorio}>Repositório</a>
						</div>
						<ul class="projetos_card_inferior_lista_tecs">
							${projeto.tecs.map(tec => `<li class="projetos_card_inferior_lista_tecs_item">${tec}</li>`).join('')}
						</ul>
				</div>
			</li>
		`
	})
}

criaListaProjetos();
criaListaCursos();