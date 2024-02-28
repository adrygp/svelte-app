<script>
    import TestComponent from "../components/test-component.svelte";

    // Imports necesarios para persistencia
    import { onMount } from "svelte";
    import { session } from "$lib/stores";
    import { get } from "svelte/store";

    let sessionData = "";

    onMount(() => {
        sessionData = JSON.stringify(get(session), null, 2);
    });

    function savePersistentData() {
        try {
            session.set(JSON.parse(sessionData));
        }
        catch {
            alert("JSON no válido, no se puede guardar");
        }
    }

    function resetData() {
        sessionData = JSON.stringify(
            {
                "example": "this is a persistence data example",
                "variable1": 12,
                "variable2": true,
                "lorem": "ipsum"
            },
        null, 2);
    }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<TestComponent name="someone"/>

<h1>Ejemplo de Persistencia en Sesión</h1>

<p>
    El siguiente textarea muestra un JSON persistente en sesión de navegador
    <b>(Es necesario instalar la dependencia "svelte-persisted-store" si queréis
    replicar este ejemplo en otro repositorio)</b>.
</p>

<p>
    Prueba a modificar su contenido, pulsar el botón de <b>"Guardar cambios"</b>
    y recargar la página (o abrir otra pestaña) para comprobar que los cambios 
    se mantienen.
</p>

<textarea bind:value={sessionData} />
<br>
<button on:click={savePersistentData}>Guardar cambios</button>
<button on:click={resetData}>Resetear datos</button>

<style>
    textarea {
        width: 600pt;
        height: 200pt;
        font-size: 14pt;
    }
</style>