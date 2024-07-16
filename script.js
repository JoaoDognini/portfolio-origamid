const listaFormacoes = [
	{
		titulo: 'Formação A partir do zero: HTML e CSS para projetos web',
		horas: '51',
		certificado: 'https://cursos.alura.com.br/user/joaodognini/degree-html-css-v527396-527396/certificate'
	},
	{
		titulo: 'Formação CSS: aprofunde em estilos',
		horas: '36',
		certificado: 'https://cursos.alura.com.br/user/joaodognini/degree-css-estilos-v671897-671897/certificate'
	},
	{
		titulo: 'Formação Bootstrap 5: desenvolvimento de websites responsivos e atraentes',
		horas: '15',
		certificado: 'https://cursos.alura.com.br/user/joaodognini/degree-bootstrap-5-websites-responsivos-atraentes-598260/certificate'
	},
	{
		titulo: 'Formação Desenvolva aplicações Web com JavaScript',
		horas: '60',
		certificado: 'https://cursos.alura.com.br/user/joaodognini/degree-javascript-front-end-v374365-374365/certificate'
	},
	{
		titulo: 'Formação Desenvolva aplicações Web em JavaScript com tarefas concorrentes e orientadas a objetos',
		horas: '23',
		certificado: 'https://cursos.alura.com.br/user/joaodognini/degree-aplicacoes-javascript-tarefas-concorrentes-orientadas-objetoss-543206/certificate'
	},
	{
		titulo: 'Formação Explore React com JavaScript',
		horas: '65',
		certificado: 'https://cursos.alura.com.br/user/joaodognini/degree-react-javascript-v450960-450960/certificate'
	},
	{
		titulo: 'Formação Melhore sua experiência de desenvolvimento com TypeScript',
		horas: '31',
		certificado: 'https://cursos.alura.com.br/user/joaodognini/degree-typescript-v309729-309729/certificate'
	},
	{
		titulo: 'Formação Gerencie aplicações React com TypeScript',
		horas: '79',
		certificado: 'https://cursos.alura.com.br/user/joaodognini/degree-react-ts-v581770-581770/certificate'
	},
	{
		titulo: 'Formação Desenvolva aplicações Web e Mobile com React e React Native',
		horas: '36',
		certificado: 'https://cursos.alura.com.br/user/joaodognini/degree-aplicacoes-web-mobile-react-react-native-594432/certificate'
	},
	{
		titulo: 'Formação React: desenvolva aplicações web usando JSX e Hooks',
		horas: '58',
		certificado: 'https://cursos.alura.com.br/user/joaodognini/degree-react-jsx-hooks-702713/certificate'
	},
	{
		titulo: 'Formação Full stack JavaScript: crie um projeto com React e Node.js',
		horas: '28',
		certificado: 'https://cursos.alura.com.br/user/joaodognini/degree-full-stack-react-node-js-455268/certificate'
	}

]

const listaCursos = document.getElementById('lista_cursos');

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

criaListaCursos();