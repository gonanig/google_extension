init();

async function init(){
   let result = await requestBackground(
       new ExtensionMessage(config.keys.getBackgroundInfo, {})
       );

       let testElement = await elementAppear("#result-stats");
       testElement.textContent = JSON.stringify(result); 
}
