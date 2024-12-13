<script>
    let peso = '';
    let dias = '';
    let resultado = null;

    async function calcular() {
        const response = await fetch('http://localhost:3000/calcular', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ peso, dias }),
        });
        resultado = await response.json();
    }
</script>

<main>
    <header>
        <button class="back-button">Atrás</button>
        <h1>Calculadora</h1>
    </header>
    
    <section class="result-section">
        <h2>Rango peso correcto</h2>
        <p class="range">57.2 - 77.5</p>
        {#if resultado}
            <p class="deberias">Deberías:</p>
            <p class="resultado">
                <span>Perder</span> 
                <span class="highlight">{resultado.pesoPerdido} kg</span> 
                <span>en</span> 
                <span class="highlight">{resultado.diasEstimados} days.</span>
            </p>
        {/if}
    </section>

    <section class="form-section">
        <h2>Calculadora</h2>
        <div class="input-group">
            <label for="peso">Peso</label>
            <div class="peso-input">
                <input type="number" id="peso" bind:value={peso} placeholder="75" />
                <span>kg</span>
            </div>
        </div>
        <div class="input-group">
            <label for="dias">Días</label>
            <input type="number" id="dias" bind:value={dias} placeholder="150" />
        </div>
        <button on:click={calcular} class="submit-button">Veamos!</button>
    </section>
</main>

<style>
    main {
        font-family: 'Arial', sans-serif;
        max-width: 400px;
        margin: auto;
        padding: 20px;
        text-align: center;
        color: #333;
    }

    header {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }

    .back-button {
        background: none;
        border: none;
        font-size: 18px;
        color: #007bff;
        cursor: pointer;
        margin-right: auto;
    }

    h1 {
        font-size: 24px;
        margin: 0;
    }

    .result-section {
        background: #f9f9f9;
        padding: 20px;
        border-radius: 10px;
        margin-bottom: 20px;
    }

    .result-section h2 {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .range {
        font-size: 22px;
        font-weight: bold;
    }

    .deberias {
        font-size: 16px;
        margin-top: 20px;
    }

    .resultado {
        font-size: 18px;
        margin-top: 10px;
    }

    .highlight {
        color: #007bff;
        font-weight: bold;
    }

    .form-section {
        text-align: left;
    }

    .form-section h2 {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .input-group {
        margin-bottom: 20px;
    }

    .input-group label {
        display: block;
        font-size: 14px;
        margin-bottom: 5px;
        color: #666;
    }

    .peso-input {
        display: flex;
        align-items: center;
    }

    .peso-input input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px 0 0 5px;
        font-size: 16px;
    }

    .peso-input span {
        padding: 10px;
        background: #eee;
        border: 1px solid #ccc;
        border-left: none;
        border-radius: 0 5px 5px 0;
        font-size: 16px;
    }

    input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
    }

    .submit-button {
        display: block;
        width: 100%;
        padding: 15px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
    }

    .submit-button:hover {
        background-color: #0056b3;
    }
</style>
