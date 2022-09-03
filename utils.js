export function drawStatusText(context, input){
    context.font = '30px Helvetica'
    context.fillText('last input: ' + input.lastkey, 20, 50)
}