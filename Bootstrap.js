(() => {
	const bootstrapCss = document.createElement("link");
	bootstrapCss.rel = "stylesheet";
	bootstrapCss.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
	document.head.appendChild(bootstrapCss);

	const fonts = document.createElement("link");
	fonts.rel = "stylesheet";
	fonts.href = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Outfit:wght@500;600;700;800&display=swap";
	document.head.appendChild(fonts);

	const style = document.createElement("style");
	style.textContent = `
		:root{--pizza-red:#d84932;--pizza-dark:#24211f;--pizza-cream:#fffaf2;--pizza-gold:#f4b942}
		body{font-family:'DM Sans',sans-serif;background:var(--pizza-cream);color:var(--pizza-dark)}
		h1,h2,h3,.navbar-brand{font-family:'Outfit',sans-serif}
		.navbar{background:rgba(255,250,242,.96)}
		.navbar-brand{font-weight:800;letter-spacing:-.04em;font-size:1.55rem}
		.brand-mark{color:var(--pizza-red)}
		.btn-pizza{background:var(--pizza-red);border-color:var(--pizza-red);color:#fff;font-weight:700}
		.btn-pizza:hover{background:#b93624;border-color:#b93624;color:#fff}
		.hero{position:relative;overflow:hidden;background:linear-gradient(112deg,#271e1a 0%,#3b2920 58%,#713a26 100%);color:white;border-radius:0 0 2rem 2rem}
		.hero:after{content:'🍕';position:absolute;right:5%;top:50%;transform:translateY(-50%) rotate(-12deg);font-size:clamp(10rem,28vw,23rem);opacity:.2;pointer-events:none}
		.hero-content{position:relative;z-index:1;max-width:670px;padding:6.5rem 0}
		.hero h1{font-size:clamp(2.7rem,6vw,5.25rem);line-height:1.02;font-weight:800;letter-spacing:-.045em}
		.eyebrow{color:var(--pizza-gold);font-weight:700;letter-spacing:.13em;text-transform:uppercase;font-size:.8rem}
		.section-heading{font-weight:800;letter-spacing:-.035em}
		.pizza-card{border:0;border-radius:1rem;overflow:hidden;box-shadow:0 8px 26px rgba(45,34,25,.07);transition:transform .2s,box-shadow .2s;height:100%}
		.pizza-card:hover{transform:translateY(-5px);box-shadow:0 14px 32px rgba(45,34,25,.13)}
		.pizza-art{height:180px;display:grid;place-items:center;font-size:6rem;background:linear-gradient(135deg,#f9dfb9,#f2b66f)}
		.pizza-card:nth-child(2) .pizza-art{background:linear-gradient(135deg,#f4c7a6,#dd7451)}
		.pizza-card:nth-child(3) .pizza-art{background:linear-gradient(135deg,#e4d7a8,#c5a64d)}
		.pizza-card:nth-child(4) .pizza-art{background:linear-gradient(135deg,#f2c6bd,#d97c67)}
		.price{font-weight:800;color:var(--pizza-red);font-size:1.15rem}
		.tag{font-size:.75rem;font-weight:700;color:#79562d;background:#fff2d6;padding:.35rem .65rem;border-radius:2rem}
		.order-band{background:#f4ebdc;border-radius:1.25rem}
		footer{background:var(--pizza-dark);color:#e9dfd5}
		.form-control,.form-select{padding:.75rem;border-radius:.65rem}
		@media(max-width:575.98px){.hero-content{padding:4.5rem 0}.hero:after{right:-16%;opacity:.14}.pizza-art{height:150px}}
	`;
	document.head.appendChild(style);
	document.title = "Senai Pizza | Sabor que reúne";

	document.body.innerHTML = `
		<nav class="navbar navbar-expand-lg sticky-top shadow-sm">
			<div class="container py-2">
				<a class="navbar-brand" href="#inicio"><span class="brand-mark">●</span> Senai Pizza</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Abrir menu"><span class="navbar-toggler-icon"></span></button>
				<div class="collapse navbar-collapse" id="mainNav">
					<ul class="navbar-nav ms-auto align-items-lg-center gap-lg-3">
						<li class="nav-item"><a class="nav-link" href="#cardapio">Cardápio</a></li>
						<li class="nav-item"><a class="nav-link" href="#sobre">Nossa história</a></li>
						<li class="nav-item"><button class="btn btn-pizza rounded-pill px-4 ms-lg-2" data-bs-toggle="modal" data-bs-target="#pedidoModal">Peça agora</button></li>
					</ul>
				</div>
			</div>
		</nav>

		<header class="hero" id="inicio">
			<div class="container"><div class="hero-content">
				<p class="eyebrow mb-3">Feita com carinho, direto do forno</p>
				<h1>Um pedaço de felicidade em cada fatia.</h1>
				<p class="lead text-white-50 mt-4 mb-4">Ingredientes fresquinhos, massa artesanal e aquele sabor que transforma qualquer dia em ocasião especial.</p>
				<a class="btn btn-pizza btn-lg rounded-pill px-4" href="#cardapio">Explorar cardápio <span aria-hidden="true">→</span></a>
			</div></div>
		</header>

		<main>
			<section class="container py-5 py-lg-6" id="cardapio">
				<div class="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3 mb-4">
					<div><p class="eyebrow mb-2">As favoritas da casa</p><h2 class="section-heading mb-0">Nosso cardápio</h2></div>
					<p class="text-secondary mb-1">Feitas na hora. Compartilhadas com alegria.</p>
				</div>
				<div class="row g-4">
					<div class="col-12 col-sm-6 col-lg-3"><article class="card pizza-card"><div class="pizza-art" role="img" aria-label="Pizza de calabresa">🍕</div><div class="card-body p-4"><span class="tag">A queridinha</span><h3 class="h5 mt-3 mb-2">Calabresa da casa</h3><p class="text-secondary small">Calabresa fatiada, cebola roxa, muçarela e orégano.</p><div class="d-flex justify-content-between align-items-center"><span class="price">R$ 39,90</span><button class="btn btn-sm btn-outline-danger rounded-pill" data-pizza="Calabresa da casa" data-bs-toggle="modal" data-bs-target="#pedidoModal">Pedir</button></div></div></article></div>
					<div class="col-12 col-sm-6 col-lg-3"><article class="card pizza-card"><div class="pizza-art" role="img" aria-label="Pizza de marguerita">🍕</div><div class="card-body p-4"><span class="tag">Leve e saborosa</span><h3 class="h5 mt-3 mb-2">Marguerita</h3><p class="text-secondary small">Tomate fresco, muçarela, manjericão e azeite.</p><div class="d-flex justify-content-between align-items-center"><span class="price">R$ 37,90</span><button class="btn btn-sm btn-outline-danger rounded-pill" data-pizza="Marguerita" data-bs-toggle="modal" data-bs-target="#pedidoModal">Pedir</button></div></div></article></div>
					<div class="col-12 col-sm-6 col-lg-3"><article class="card pizza-card"><div class="pizza-art" role="img" aria-label="Pizza de quatro queijos">🍕</div><div class="card-body p-4"><span class="tag">Super cremosa</span><h3 class="h5 mt-3 mb-2">Quatro queijos</h3><p class="text-secondary small">Muçarela, provolone, parmesão e requeijão cremoso.</p><div class="d-flex justify-content-between align-items-center"><span class="price">R$ 43,90</span><button class="btn btn-sm btn-outline-danger rounded-pill" data-pizza="Quatro queijos" data-bs-toggle="modal" data-bs-target="#pedidoModal">Pedir</button></div></div></article></div>
					<div class="col-12 col-sm-6 col-lg-3"><article class="card pizza-card"><div class="pizza-art" role="img" aria-label="Pizza de frango com catupiry">🍕</div><div class="card-body p-4"><span class="tag">Clássico brasileiro</span><h3 class="h5 mt-3 mb-2">Frango &amp; catupiry</h3><p class="text-secondary small">Frango desfiado, catupiry original e toque de milho.</p><div class="d-flex justify-content-between align-items-center"><span class="price">R$ 42,90</span><button class="btn btn-sm btn-outline-danger rounded-pill" data-pizza="Frango & catupiry" data-bs-toggle="modal" data-bs-target="#pedidoModal">Pedir</button></div></div></article></div>
				</div>
			</section>

			<section class="container pb-5" id="sobre"><div class="order-band p-4 p-md-5 row align-items-center g-4"><div class="col-lg-8"><p class="eyebrow mb-2">Feito para compartilhar</p><h2 class="section-heading">Sua próxima pizza favorita está aqui.</h2><p class="text-secondary mb-0">Reúna a família, chame os amigos e deixe o forno com a gente.</p></div><div class="col-lg-4 text-lg-end"><button class="btn btn-pizza btn-lg rounded-pill px-4" data-bs-toggle="modal" data-bs-target="#pedidoModal">Monte seu pedido</button></div></div></section>
		</main>

		<footer class="py-4"><div class="container d-flex flex-column flex-sm-row justify-content-between gap-2"><span><strong>Senai Pizza</strong> · Sabor que reúne.</span><span class="small">Aberto todos os dias · 18h às 23h</span></div></footer>

		<div class="modal fade" id="pedidoModal" tabindex="-1" aria-labelledby="pedidoModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered"><div class="modal-content border-0 rounded-4 shadow">
				<div class="modal-header border-0 px-4 pt-4"><div><p class="eyebrow mb-1">É rapidinho</p><h2 class="modal-title h4" id="pedidoModalLabel">Faça seu pedido</h2></div><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button></div>
				<form id="pedidoForm"><div class="modal-body px-4">
					<div class="mb-3"><label for="nome" class="form-label">Seu nome</label><input class="form-control" id="nome" name="nome" placeholder="Como podemos te chamar?" required></div>
					<div class="mb-3"><label for="pizza" class="form-label">Escolha sua pizza</label><select class="form-select" id="pizza" name="pizza" required><option value="">Selecione uma opção</option><option>Calabresa da casa</option><option>Marguerita</option><option>Quatro queijos</option><option>Frango &amp; catupiry</option></select></div>
					<div class="mb-3"><label for="endereco" class="form-label">Endereço para entrega</label><input class="form-control" id="endereco" name="endereco" placeholder="Rua, número e bairro" required></div>
					<div id="pedidoFeedback" class="alert alert-success d-none mb-0" role="status"></div>
				</div><div class="modal-footer border-0 px-4 pb-4"><button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Voltar</button><button type="submit" class="btn btn-pizza rounded-pill px-4">Enviar pedido</button></div></form>
			</div></div>
		</div>`;

	const bootstrapScript = document.createElement("script");
	bootstrapScript.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
	bootstrapScript.onload = () => {
		document.querySelectorAll("[data-pizza]").forEach((button) => {
			button.addEventListener("click", () => {
				document.getElementById("pizza").value = button.dataset.pizza;
			});
		});
		document.getElementById("pedidoForm").addEventListener("submit", (event) => {
			event.preventDefault();
			const nome = document.getElementById("nome").value.trim();
			const feedback = document.getElementById("pedidoFeedback");
			feedback.textContent = `Obrigado, ${nome}! Seu pedido foi registrado.`;
			feedback.classList.remove("d-none");
			event.currentTarget.querySelector("[type=submit]").disabled = true;
		});
	};
	document.body.appendChild(bootstrapScript);
})();
