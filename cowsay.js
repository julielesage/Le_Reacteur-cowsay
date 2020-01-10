const str =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui sapien, faucibus in justo viverra, placerat dapibus leo. Integer hendrerit tincidunt ante, sed rhoncus augue efficitur porttitor. Sed faucibus enim at nisl aliquet, eu tempor augue congue. Suspendisse venenatis neque eu eros consequat volutpat. Vivamus hendrerit sed mauris placerat venenatis. Aliquam elementum magna ut accumsan mollis. Aenean et ultrices justo. Integer volutpat ullamcorper dignissim. Nam condimentum, sem et lacinia commodo, nisl diam consectetur tortor, in accumsan sem diam eget velit. Donec in pulvinar orci. Quisque eu mauris sapien. Phasellus non mollis nunc. Quisque sollicitudin tristique sapien. Sed massa felis, varius ornare nunc ac, maximus scelerisque tortor. Donec luctus libero mauris, vitae congue orci euismod condimentum. Sed metus ipsum, facilisis quis nibh non, fringilla fermentum arcu.";
const cow = `      \\ 
       \\  ^__^
          (oo)\\_______
          (__)\\       )\\/\\
              ||----w |
              ||     ||`;

const getSpaces = (num) =>
{
    let string = "";
    nbSpaces = 40 - num;
    for (let i = 0; i < nbSpaces; i++) string += " ";
    return string;
}

const cowsay = (str) => {
    let firstLine = true;
    let line = "";
    let word = "";
    
    console.log(" _________________________________________ ");
    for (let i = 0; i < str.length; i++)
    {
        if (str.charAt(i) === " ")
        { 
            if (line.length + word.length > 39)
            {
                if (firstLine) 
                {
                    line = "/ " + line + getSpaces(line.length) + "\\";
                    firstLine = false;
                }
                else line = "| " + line + getSpaces(line.length) + "|";
                console.log(line);
                line = "";
            }
            line += word + " ";
            word = "";
        }
        else 
            word += str.charAt(i);
        if (i === str.length - 1)
        {
            console.log("\\ " + line + word + getSpaces(line.length + word.length) + "/");
        }
    }
    console.log(" ________________________________________ ");
    console.log(cow);
}

cowsay(str);
