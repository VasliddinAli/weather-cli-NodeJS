import chalk from "chalk";
import dedent from "dedent-js";

const printError = (error) => {
    console.log(chalk.bgRed("ERROR") + " " + error);
}

const printSuccess = (success) => {
    console.log(chalk.bgGreen("SUCCESS") + " " + success);
}

const printHelp = () => {
    console.log(dedent`
        ${chalk.bgCyan("HELP")}
        -s [CITY] for install city
        -h for help
        -t [API_KEY] for saving token
    `);
}

const printWeather = (response, icon) => {
    console.log(`
        ${chalk.bgYellowBright("WEATHER")} City weather ${response.name}
        ${icon} ${response.weather[0].description}
        Temperature: ${response.main.temp} (feels like: ${response.main.feels_like})
        Humidity: ${response.main.humidity}%
        Wind spped: ${response.wind.speed}
    `);
}

export {
    printError,
    printSuccess,
    printHelp,
    printWeather
}