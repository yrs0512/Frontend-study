    <template>
      <div>
        <p v-for="data in names">{{ data }}</p>
        <p v-for="data in names">{{ data }}</p>
      </div>
    </template>

    <script>
      export default {
        data() {
          return {
            names: ["张三", "李四", "王五"],
          };
        },
      };
    </script>