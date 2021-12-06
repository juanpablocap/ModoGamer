 
 //* Tenemos que tomar el email del usuario que se este registrando o usando nuestra pagina
let userActive = {
    name: "Juan",
    email: "juanpablocapilla@gmail.com"
}
let to = userActive.email  
//^Encabesados de email predeterminados, junto con las plantillas
let subject = {
    subs :"ModoGamer: Confirma tu subscripcion",
    recover : "Solicitud de recuperacion de contraseña",
    pur : "Informacion sobre tu compra en ModoGamer",
}
//^ plantillas
let suscribe = `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="x-apple-disable-message-reformatting">
    <title></title>
    <!--[if mso]>
    <noscript>
        <xml>
            <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
    </noscript>
    <![endif]-->
    <style>
        table, td, div, h1, p {font-family: Verdana, sans-serif;}
        table, td { }
        
    </style>
</head>
<body style="margin:0;padding: 0;">
    <table class="container-table" role="presentation" style="width: 100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff" >
        <tr>
            <td align="center" style="padding:o">
                <table role="presentation" style="width:602px;border-collapse:collapse;border:1px solid #ffffff;border-spacing:0;text-align:left;">
                    <tr>
                        <td align="center" style="padding:30px 0px;"><img width="200px" height="auto"src="https://i.ibb.co/RCpHrZy/logotipo.png" alt="logotipoModoGamer" ></td>
                    </tr>
                    <tr>
                        <td style="padding:40px 35px;">
                            <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                            <tr>
                                <td style="padding:0;" align="center" >
                                    <p style="margin: 0 0 20px 0;">Hola ${userActive.name},
                                        gracias por unirte a ModoGamer!
                                        <br />
                                        Tu dirección de correo electrónico se utilizará para ayudarte a cambiar, las credenciales de la cuenta de ModoGamer o recuperar el acceso a la misma,
                                        si alguna vez necesitas ayuda con esas cosas <br />
                                        Para confirmar tu cuenta, simplemente presiona el boton de abajo.</p>
                                </td>
                                <tr><td style="background-color:#96cae7; padding: 1px; "></td></tr>
                            </tr>
                            <tr>
                                <td align="center" style="padding:60px 0 0 0;">
                                    <a href="https://modogamer.netlify.app" type="button" style="background-color:#96cae7;text-decoration:none; color:#ffffff;padding: 10px; border-radius:20px" >Verifica tu cuenta</a>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style="padding: 40px 0 0 0;">
                                    <p style="font-size: small; text-align:center;margin: 0 0 20px 0; "> Si el boton no funciona, copia esta URL en tu navegador: <a href="#">URL</a> </p>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style="padding: 0;">
                                    <p style="font-size: large; font-weight:500; margin: 0 0 20px 0;"> Bienvenido! </p>
                                </td>
                            </tr>

                           </table>
                       </td>
                    </tr>
                    <tr>
                        <td style="background:#96cae7;padding:15px 30px; border-end-start-radius:15px; border-end-end-radius:15px">
                            <table role="presentation" style="width:100%;border-collapse:collapse;border: 0;border-spacing:0;">
                                <tr>
                                    <td style="padding:0;width:50%;" align="left">
                                        <img width="80px" height="auto" style="display:block;border:0;"src="https://i.ibb.co/Vj2J8X5/astro2.png" alt="astrologo" >
                                    </td>
                                    
                                    <td style="padding:0;width:50%;" align="left">
                                        <table role="presentation" style="border-collapse:collapse;border:0;border-spacing:0;">
                                            <tr>
                                                <td align="center"style="padding:0 0 0 16px;width:38px;">
                                                    <a href="https://github.com/juanpablocap/ModoGamer"><img src="https://i.ibb.co/dtnWNhF/signo-de-github.png" alt="github" width="38" style="height:auto;display:block;border:0;" /></a>
                                                </td>
                                                <td align="center" style="padding:0 0 0 10px;width:38px;">
                                                    <a href="http://www.facebook.com/"><img src="https://i.ibb.co/48Z0yqy/facebook.png" alt="Facebook" width="38" style="height:auto;display:block;border:0;" /></a>
                                                </td>
                                            </tr>
                                            
                                        </table>
                                        <td style="padding:0;width:50%;" align="rigth">
                                            <a href="#" style="text-decoration:none; color:#d94787 ;font-size:12px;">Unsubscribe</a>
                                        </td>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        
        

    </table>
    
</body>
</html>` ;
let recoveryPass = `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="x-apple-disable-message-reformatting">
    <title>Recuperar password</title>
    <!--[if mso]>
    <noscript>
        <xml>
            <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
    </noscript>
    <![endif]-->
    <style>
        table, td, div, h1, p {font-family: Verdana, sans-serif;}
        table, td { }
        
    </style>
</head>
<body style="margin:0;padding: 0;">
    <table class="container-table" role="presentation" style="width: 100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff" >
        <tr>
            <td align="center" style="padding:o">
                <table role="presentation" style="width:602px;border-collapse:collapse;border:1px solid #ffffff;border-spacing:0;text-align:left;">
                    <tr>
                        <td align="center" style="padding:30px 0px;"><img width="200px" height="auto"src="https://i.ibb.co/RCpHrZy/logotipo.png" alt="logotipoModoGamer" ></td>
                    </tr>
                    <tr>
                        <td style="padding:40px 35px;">
                            <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                            <tr>
                                <td style="padding:0;" align="center" >
                                    <p style="margin: 0 0 20px 0;font-family: Verdana, sans-serif;">Hola ${userActive.name},
                                        recibimos una solicitud para recuperar tu contraseña; si no lo hiciste desetima este e-mail.
                                        <br/> <br>
                                        Para proceder con la recuperacion presiona el boton que esta debajo, y segui las instrucciones.  
                                         <br /> <br> Recorda ModoGamer nunca va a solicitarte esta u otra informacion sobre tu cuenta.<br />
                                        </p>
                                </td>
                                <tr><td style="background-color:#96cae7; padding: 1px; "></td></tr>
                            </tr>
                            <tr>
                                <td align="center" style="padding:60px 0 0 0;">
                                    <a href="#" type="button" style="font-family: Verdana, sans-serif;background-color:#96cae7;text-decoration:none; color:#ffffff;padding: 10px; border-radius:20px" >Recuperar tu contraseña</a>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style="padding: 40px 0 0 0;">
                                    <p style="font-family: Verdana, sans-serif;font-size: small; text-align:center;margin: 0 0 20px 0; "> Si el boton no funciona, copia esta URL en tu navegador: <a href="#">URL</a> </p>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style="padding: 0;">
                                    <p style="font-family: Verdana, sans-serif;font-size: large; font-weight:500; margin: 0 0 20px 0;"> Los MundoGamer's te esperan! </p>
                                </td>
                            </tr>

                           </table>
                       </td>
                    </tr>
                    <tr>
                        <td style="background:#96cae7;padding:15px 30px; border-end-start-radius:15px; border-end-end-radius:15px;">
                            <table role="presentation" style="width:100%;border-collapse:collapse;border: 0;border-spacing:0;">
                                <tr>
                                    <td style="padding:0;width:50%;" align="left">
                                        <img width="80px" height="auto" style="display:block;border:0;"src="https://i.ibb.co/Vj2J8X5/astro2.png" alt="astrologo" >
                                    </td>
                                    
                                    <td style="padding:0;width:50%;" align="left">
                                        <table role="presentation" style="border-collapse:collapse;border:0;border-spacing:0;">
                                            <tr>
                                                <td align="center"style="padding:0 0 0 16px;width:38px;">
                                                    <a  href=""><img src="https://i.ibb.co/dtnWNhF/signo-de-github.png" alt="Twitter" width="38" style="height:auto;display:block;border:0;" /></a>
                                                </td>
                                                <td align="center" style="padding:0 0 0 10px;width:38px;">
                                                    <a href=""><img src="https://i.ibb.co/48Z0yqy/facebook.png" alt="Facebook" width="38" style="height:auto;display:block;border:0;" /></a>
                                                </td>
                                            </tr>
                                            
                                        </table>
                                        <td style="padding:0;width:50%;" align="rigth">
                                            <a href="#" style="font-family: Verdana, sans-serif;text-decoration:none; color:#d94787 ;font-size:12px;">About us</a>
                                        </td>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        
        

    </table>
    
</body>
</html>`;
let purchase = [];



//! necesitamos llamar a esta funcion en cada instancia que se debe enviar el email, 
//!junto con el subject y la plantilla
function mail(){

 Email.send({
    SecureToken : "e73dca5d-a22d-4b8f-a374-705aa5aea127",
    To : ` ${to} , guaca33@gmail.com , javiernmartinez96@gmail.com , carlos.mocsary@gmail.com, muratoreasofia@gmail.com` ,
    From : "modogamerse@gmail.com",
    Subject : subject.recover,
    Body : recoveryPass,
 }).then(
  message => console.log(message)
  )
}