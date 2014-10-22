var Config = (function () {

	var tags = ["Testes", "Refatoração", "Restricões", "Planejamento", "Oportunidades", 
			"Motivação", "Melhoria contínua", "Ideias", "Cultura", "Comprometimento", 
			"Casos de Sucesso", "Aprendizagem", "Técnicas", "Requisitos", "Processos", 
			"Negócios", "Métricas", "Estratégias", "Design emergente", "Coaching", 
			"Relacionamento com clientes", "Times", "Experiência do usuário", 
			"Criação", "Evolução", "Test Driven Design", "Estimativas", "Implantação", 
			"Startup", "Riscos", "Casos de Fracasso", "Visualização", "Padrões", 
			"Integração contínua", "Deploy contínuo", "Automação", "Habilidade", 
			"Código legado", "Front end", "Programação pareada", "Revisão de código"];

	function numberOfTags () {
		return tags.length;
	}

	function tag (index) {
		return tags[index];
	}

	function tagClass(index) {
		return tags[index].replace(/ /g, "-");
	}

	return {
		numberOfTags: numberOfTags,
		tag: tag,
		tagClass: tagClass
	};
})();
