//=============================================================================

//  ███████╗  █████╗  ███╗   ██╗ ██████╗  ███████╗ ███████╗    ███╗   ███╗ ██████╗          
//  ██╔════╝ ██╔══██╗ ████╗  ██║ ██╔══██╗ ██╔════╝ ██╔════╝    ████╗ ████║ ██╔══██╗               
//  ╚█████╗  ███████║ ██╔██╗ ██║ ██║  ██║ █████╗   ███████╗    ██╔████╔██║ ██║  ██║                    
//   ╚═══██╗ ██╔══██║ ██║╚██╗██║ ██║  ██║ ██╔══╝   ╚════██║    ██║╚██╔╝██║ ██║  ██║             
//  ██████╔╝ ██║  ██║ ██║ ╚████║ ██████╔╝ ███████╗ ███████║    ██║ ╚═╝ ██║ ██████╔╝                       
//  ╚═════╝  ╚═╝  ╚═╝ ╚═╝  ╚═══╝ ╚═════╝  ╚══════╝ ╚══════╝    ╚═╝     ╚═╝ ╚═════╝      
//  
// © SANDES MD 2026 | MADE BY MR.SANDES 🍒 | ALL RIGHTS RESERVED !

//===========================================================================

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "AUsG1BrA#P7Pc9AdAn0dWCLzFyUVIMMfOKaG-qehCLb756kVqnz0",
ALIVE_IMG : process.env.ALIVE_IMG || "https://cloud.laksidu.site/dl/sMmfOrklgw/lakiya-1790363292456.jpg",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", 
};
