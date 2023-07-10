<script>
  import data from "./2019.js";
  import BarChart from "./BarChart.svelte";
</script>

<section>
    <div class="m-10 text-7xl font-semibold text-center">
        Visuals
    </div>

    <BarChart {data} />
</section>