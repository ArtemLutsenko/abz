// vue.config.js
module.exports = {
    css: {
      loaderOptions: {
        // передача настроек в sass-loader
        // @/ это псевдоним к каталогу src/ поэтому предполагается,
        // что у вас в проекте есть файл `src/variables.scss`
        // Примечание: эта опция называется "data" в sass-loader v7
        sass: {
          prependData: `@import "@/../src/styles/styles.scss";`
        },
        // по умолчанию опция `sass` будет применяться к обоим синтаксисам
        // потому что синтаксис `scss` по сути также обрабатывается sass-loader
        // но при настройке опции `data` синтаксис `scss` требует точку с запятой
        // в конце оператора, в то время как для `sass` точки с запятой не требуется
        // в этом случае синтаксис `scss` можно настроить отдельно с помощью опции `scss`
        // передача настроек Less.js в less-loader
        less:{
          // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
          // `primary` — имя поля глобальных переменных
          globalVars: {
            primary: '#fff'
          }
        }
      }
    }
  }