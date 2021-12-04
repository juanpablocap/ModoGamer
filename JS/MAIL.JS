 
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
};
//^ plantillas
let suscribe = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head>
<title>
</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
<style type="text/css">body, html {
  margin: 0px;
  padding: 0px;
  -webkit-font-smoothing: antialiased;
  text-size-adjust: none;
  width: 100% !important;
}
  table td, table {
  }
  #outlook a {
    padding: 0px;
  }
  .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {
    line-height: 100%;
  }
  .ExternalClass {
    width: 100%;
  }
  @media only screen and (max-width: 480px) {
    table, table tr td, table td {
      width: 100% ;
    }
    table tr td table.edsocialfollowcontainer  {
      width: auto;
    }
    img {
      width: inherit;
    }
    .layer_2 {
      max-width: 100% !important;
    }
    .edsocialfollowcontainer table {
      max-width: 25% !important;
    }
    .edsocialfollowcontainer table td {
      padding: 10px !important;
    }
    .edsocialfollowcontainer table {
      max-width: 25% !important;
    }
    .edsocialfollowcontainer table td {
      padding: 10px !important;
    }
  }
</style>
<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i,700,700i &subset=cyrillic,latin-ext" data-name="open_sans" rel="stylesheet" type="text/css">
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/spectrum/1.8.0/spectrum.min.css">

</head><body style="padding:0; margin: 0;background: #e4e6ec">
<table style="height: 100%; width: 100%; background-color: #e4e6ec;" align="center">
  <tbody>
    <tr>
      <td valign="top" id="dbody" data-version="2.31" style="width: 100%; height: 100%; background-color: #000000; padding-top: 50px; padding-bottom: 50px;">
        <!--[if (gte mso 9)|(IE)]><table align="center" style="max-width:492px" width="492" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
        <!--[if (gte mso 9)|(IE)]><table align="center" style="max-width:600px" width="600" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
        <table class="layer_1" align="center" border="0" cellpadding="0" cellspacing="0" style="border-width: 0px; border-color: #000000; border-style: none; max-width: 492px; box-sizing: border-box; width: 100%; margin: 0px auto;">
          <tbody>
            <tr>
              <td class="drow" valign="top" align="center" style="background-color: #000000; box-sizing: border-box; font-size: 0px; text-align: center;">
                <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                <div class="layer_2" style="max-width: 492px; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellspacing="0" class="edcontent" style="border-collapse: collapse;width:100%">
                    <tbody>
                      <tr>
                        <td valign="top" class="edtext" style="padding: 8px; text-align: left; color: #5f5f5f; font-size: 12px; font-family: &quot;Open Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; word-break: break-word; direction: ltr; box-sizing: border-box;">
                          <p style="font-size: 9px; margin: 0px; padding: 0px;"> 
                            <span style="color: #ffffff;">Unable to view? Read it</span>
                            <span style="color: #00ff68;"></span>
                            <a href="{view}" style="color: #00ff68; text-decoration: none;"><span style="color: #00ff13;">online</span></a> 
                            <a href="{view}" style="color: #5457ff; text-decoration: none;"></a></p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr>
            <tr>
              <td class="drow" valign="top" align="center" style="background-color: #000000; box-sizing: border-box; font-size: 0px; text-align: center;">
                <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                <div class="layer_2" style="max-width: 492px; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                    <tbody>
                      <tr>
                        <td valign="top" class="emptycell" style="padding: 0px;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr>
            <tr>
              <td class="drow" valign="top" align="center" style="background-color: #000000; box-sizing: border-box; font-size: 0px; text-align: center;">
                <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                <div class="layer_2" style="max-width: 492px; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                    <tbody>
                      <tr>
                        <td valign="top" class="emptycell" style="padding: 0px;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr>
            <tr>
              <td class="drow" valign="top" align="center" style="background-color: #000000; box-sizing: border-box; font-size: 0px; text-align: center;">
                <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                <div class="layer_2" style="max-width: 492px; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                    <tbody>
                      <tr>
                        <td valign="top" class="emptycell" style="padding: 0px;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr>
            <tr>
              <td class="drow" valign="top" align="center" style="background-color: #000000; box-sizing: border-box; font-size: 0px; text-align: center;">
                <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                <div class="layer_2" style="max-width: 492px; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                    <tbody>
                      <tr>
                        <td valign="top" class="emptycell" style="padding: 0px;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr>
            <tr>
              <td class="drow" valign="top" align="center" style="background-color: #000000; box-sizing: border-box; font-size: 0px; text-align: center;">
                <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                <!--[if (gte mso 9)|(IE)]></td><td valign="top"><![endif]-->
                <div class="layer_2" style="max-width: 492px; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                    <tbody>
                      <tr>
                        <td valign="top" class="emptycell" style="padding: 10px;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr><tr><td class="drow" valign="top" align="center" style="background-color: #ffffff; box-sizing: border-box; font-size: 0px; text-align: center;"><!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]--><div class="layer_2" style="display: inline-block; vertical-align: top; width: 100%; max-width: 600px;"><table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse; width: 100%; background-color: #000000;"><tbody><tr><td valign="top" class="edimg" style="text-align: center; padding: 4px; font-size: 12px; box-sizing: border-box;"><img src="/IMAGENES/LOGO/logotipo.png" alt="Imagen" style="border-width: 0px; border-style: none; max-width: 1320px; width: 100%;" width="1320"></td></tr></tbody></table></div><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--></td></tr>
            
            <tr>
              <td class="drow" valign="top" align="center" style="background-color: #000000; box-sizing: border-box; font-size: 0px; text-align: center;">
                <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                <div class="layer_2" style="max-width: 246px; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                    <tbody>
                      <tr>
                        <td valign="top" class="emptycell" style="padding: 20px;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if (gte mso 9)|(IE)]></td><td valign="top"><![endif]-->
                <div class="layer_2" style="max-width: 246px; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                    <tbody>
                      <tr>
                        <td valign="top" class="emptycell" style="padding: 0px;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr>
            <tr>
              <td class="drow" valign="top" align="center" style="background-color: #000000; box-sizing: border-box; font-size: 0px; text-align: center;">
                <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                <div class="layer_2" style="max-width: 492px; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellspacing="0" class="edcontent" style="border-collapse: collapse;width:100%">
                    <tbody>
                      <tr>
                        <td valign="top" class="edtext" style="padding: 0px; color: #ffffff; font-size: 14px; font-family: Lato, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; text-align: left; word-break: break-word; direction: ltr; box-sizing: border-box;">
                          <p class="style2" style="line-height: 2.25em; font-size: 14px; font-family: Arial, Helvetica, sans-serif; margin: 0px; padding: 0px; color: #000000;"><font color="#a1a1a1"></font></p><p style="margin: 0px; padding: 0px;"><span style="color: #808080;">Dear ${userActive.name},</span></p>
<p style="margin: 0px; padding: 0px;"><span style="color: #808080;">In order to help maintain the security of your&nbsp;<span class="il">Steam</span>&nbsp;account, please verify your email address by clicking the below button.&nbsp;</span></p><p style="margin: 0px; padding: 0px;"><span style="color: #808080;"><br></span></p>
<p style="margin: 0px; padding: 0px;"><span style="color: #808080;">Your email address will be used to assist you in changing your&nbsp;<span class="il">Steam</span>&nbsp;account credentials or regaining access to your&nbsp;<span class="il">Steam</span>&nbsp;account, should you ever need help with those things.</span></p>
<p style="margin: 0px; padding: 0px;"><br></p><p style="line-height: 2.25em; font-size: 14px; font-family: Arial, Helvetica, sans-serif; margin: 0px; padding: 0px; color: #000000;" class="style2"><font color="#a1a1a1"></font></p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr>
            <tr>
              <td class="drow" valign="top" align="center" style="background-color: #000000; box-sizing: border-box; font-size: 0px; text-align: center;">
                <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                <div class="layer_2" style="max-width: 492px; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                    <tbody>
                      <tr>
                        <td valign="top" class="emptycell" style="padding: 0px;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr>
            <tr>
              <td class="drow" valign="top" align="center" style="background-color: #000000; box-sizing: border-box; font-size: 0px; text-align: center;">
                <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                <div class="layer_2" style="max-width: 492px; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                    <tbody>
                      <tr>
                        <td valign="top" class="emptycell" style="padding: 0px;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr>
            <tr>
              <td class="drow" valign="top" align="center" style="background-color: #000000; box-sizing: border-box; font-size: 0px; text-align: center;">
                <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                <div class="layer_2" style="max-width: 492px; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                    <tbody>
                      <tr>
                        <td valign="top" class="emptycell" style="padding: 0px;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr>
            <tr>
              <td class="drow" valign="top" align="center" style="background-color: #000000; box-sizing: border-box; font-size: 0px; text-align: center;">
                <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                <div class="layer_2" style="max-width: 492px; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                    <tbody>
                      <tr>
                        <td valign="top" class="emptycell" style="padding: 10px;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr>
            <tr>
              <td class="drow" valign="top" align="center" style="background-color: #000000; box-sizing: border-box; font-size: 0px; text-align: center;">
                <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                <div class="layer_2" style="max-width: 246px; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse; width: 100%; background-color: #000000;">
                    <tbody>
                      <tr>
                        <td valign="top" class="breakline" style="padding: 0px;">
                          <p style="border-style: solid none none; border-width: 2px 0px 0px; margin: 36px 0px; border-top-color: #00e2ff; padding: 0px;">&nbsp;
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if (gte mso 9)|(IE)]></td><td valign="top"><![endif]-->
                <div class="layer_2" style="max-width: 246px; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellspacing="0" class="edcontent" style="border-collapse: collapse; width: 100%;">
                    <tbody>
                      <tr>
                        <td valign="top" class="edbutton" style="padding: 20px;">
                          <table cellspacing="0" cellpadding="0" style="text-align: center;" align="right">
                            <tbody>
                              <tr>
                                <td align="center" style="border-radius: 22px; padding: 10px; background: #d94787;">
                                  <a href="http://modogamer.netlify.app" style="color: #4fc7c6; font-size: 14px; font-family: &quot;Arial Black&quot;, Gadget, sans-serif; font-weight: normal; text-decoration: none; display: inline-block;"><span style="color: #4fc7c6;">Verifica tu e-mail</span></a></td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr>
            <tr>
              <td class="drow" valign="top" align="center" style="background-color: #000000; box-sizing: border-box; font-size: 0px; text-align: center;">
                <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                <div class="layer_2" style="max-width: 492px; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                    <tbody>
                      <tr>
                        <td valign="top" class="emptycell" style="padding: 0px;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr><tr><td class="drow" valign="top" align="center" style="background-color: #ffffff; box-sizing: border-box; font-size: 0px; text-align: center;"><!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]--><div class="layer_2" style="display: inline-block; vertical-align: top; width: 100%; max-width: 600px;"><table border="0" cellspacing="0" class="edcontent" style="border-collapse: collapse; width: 100%; background-color: #000000;"><tbody><tr><td valign="top" class="edtext" style="padding: 20px; text-align: left; color: #5f5f5f; font-size: 12px; font-family: &quot;Open Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; word-break: break-word; direction: ltr; box-sizing: border-box;"><p style="margin: 0px; padding: 0px;"><span style="color: #808080;">Thanks for helping us maintain the security of your account.</span></p>
<p style="margin: 0px; padding: 0px;"><span style="color: #808080;"><br></span></p>
<p style="margin: 0px; padding: 0px;"><span style="color: #808080;">The&nbsp;<span class="il">ModoGamer</span>&nbsp;Support Team</span></p>
<p style="margin: 0px; padding: 0px;"><br></p></td></tr></tbody></table></div><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--></td></tr>
            
            <tr>
              <td class="drow" valign="top" align="center" style="background-color: #000000; box-sizing: border-box; font-size: 0px; text-align: center;">
                <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                <div class="layer_2" style="max-width: 492px; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                    <tbody>
                      <tr>
                        <td valign="top" class="emptycell" style="padding: 16px;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr>
            <tr>
              <td class="drow" valign="top" align="center" style="background-color: #000000; box-sizing: border-box; font-size: 0px; text-align: center;">
                <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                <div class="layer_2" style="max-width: 492px; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                    <tbody>
                      <tr>
                        <td valign="top" class="breakline" style="padding: 0px;">
                          <p style="border-style: solid none none; border-width: 2px 0px 0px; margin: 8px 0px; border-top-color: #00e2ff; padding: 0px;">&nbsp;
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr>
            
            <tr>
              <td class="drow" valign="top" align="center" style="background-color: #000000; box-sizing: border-box; font-size: 0px; text-align: center;">
                <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                <div class="layer_2" style="max-width: 492px; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                    <tbody>
                      <tr>
                        <td valign="top" class="breakline" style="padding: 0px;">
                          <p style="border-style: solid none none; border-width: 2px 0px 0px; margin: 8px 0px; border-top-color: #00e2ff; padding: 0px;">&nbsp;
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr>
            
            
            <tr>
              <td class="drow" valign="top" align="center" style="background-color: #000000; box-sizing: border-box; font-size: 0px; text-align: center;">
                <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                <div class="layer_2" style="max-width: 492px; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                    <tbody>
                      <tr>
                        <td valign="top" class="emptycell" style="padding: 0px;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr>
            
            
            <tr>
              <td class="drow" valign="top" align="center" style="background-color: #000000; box-sizing: border-box; font-size: 0px; text-align: center;">
                <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                <div class="layer_2" style="max-width: 492px; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                    <tbody>
                      <tr>
                        <td valign="top" class="emptycell" style="padding: 0px;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr>
            <tr>
              <td class="drow" valign="top" align="center" style="background-color: #000000; box-sizing: border-box; font-size: 0px; text-align: center;">
                <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                <div class="layer_2" style="max-width: 492px; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                    <tbody>
                      <tr>
                        <td valign="top" class="emptycell" style="padding: 0px;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr>
            <tr>
              <td class="drow" valign="top" align="center" style="background-color: #000000; box-sizing: border-box; font-size: 0px; text-align: center;">
                <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                <div class="layer_2" style="max-width: 492px; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                    <tbody>
                      <tr>
                        <td valign="top" class="emptycell" style="padding: 0px;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr>
            <tr>
              <td class="drow" valign="top" align="center" style="background-color: #000000; box-sizing: border-box; font-size: 0px; text-align: center;">
                <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                <div class="layer_2" style="max-width: 492px; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                    <tbody>
                      <tr>
                        <td valign="top" class="emptycell" style="padding: 0px;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr>
            <tr>
              <td class="drow" valign="top" align="center" style="background-color: #000000; box-sizing: border-box; font-size: 0px; text-align: center;">
                <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                <div class="layer_2" style="max-width: 492px; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                    <tbody>
                      <tr>
                        <td valign="top" class="emptycell" style="padding: 16px;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr><tr><td class="drow" valign="top" align="center" style="background-color: #ae6464; box-sizing: border-box; font-size: 0px; text-align: center;"><!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]--><div class="layer_2" style="display: inline-block; vertical-align: top; width: 100%; max-width: 600px;"><table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse; width: 100%; background-color: #000000;"><tbody><tr><td valign="top" class="edimg" style="text-align: center; padding: 0px; font-size: 12px; box-sizing: border-box;"><img src="/IMAGENES/LOGO/pandita.png" alt="Imagen" style="border-width: 0px; border-style: none; max-width: 88px; width: 100%;" width="88"></td></tr></tbody></table></div><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--></td></tr>
            
            
            <tr>
              <td class="drow" valign="top" align="center" style="background-color: #c400a8; box-sizing: border-box; font-size: 0px; text-align: center;">
                <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                <div class="layer_2" style="max-width: 492px; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                    <tbody>
                      <tr>
                        <td valign="top" class="emptycell" style="padding: 0px;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr>
            <tr>
              <td class="drow" valign="top" align="center" style="background-color: #000000; box-sizing: border-box; font-size: 0px; text-align: center;">
                <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                <div class="layer_2" style="max-width: 492px; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                    <tbody>
                      <tr>
                        <td valign="top" class="emptycell" style="padding: 0px;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr>
            <tr>
              <td class="drow" valign="top" align="center" style="background-color: #000000; box-sizing: border-box; font-size: 0px; text-align: center;">
                <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                <div class="layer_2" style="max-width: 492px; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                    <tbody>
                      <tr>
                        <td valign="top" class="emptycell" style="padding: 0px;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr><tr><td class="drow" valign="top" align="center" style="background-color: #000000; box-sizing: border-box; font-size: 0px; text-align: center;"><!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]--><div class="layer_2" style="width: 100%; display: inline-block; vertical-align: top; max-width: 600px;"><table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%"><tbody><tr><td valign="top" class="emptycell" style="padding: 20px;"></td></tr></tbody></table></div><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--></td></tr>
            <tr>
              <td class="drow text-center" valign="top" align="center" style="background-color: #000000; text-align: center; box-sizing: border-box; font-size: 0px;">
                <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                <div class="layer_2 text-center" style="max-width: 492px; text-align: center; display: inline-block; vertical-align: top; width: 100%;">
                  <table class="edcontent" style="border-collapse: collapse;width:100%" border="0" cellpadding="0" cellspacing="0">
                    <tbody>
                      <tr>
                        <td class="edtext text-center" valign="top" style="padding: 0px; text-align: center; color: #5f5f5f; font-size: 12px; font-family: &quot;Open Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; word-break: break-word; direction: ltr; box-sizing: border-box;"><p style="font-size: 11px; margin: 0px; padding: 0px;">
                            <span style="color: #ffffff;">
                              <span style="color: #a1a1a1;">If you no longer wish to receive mail from us, you can</span>&nbsp;
                              
                              <a href="{unsubscribe}" style="background-color: initial; color: #828282; font-family: Helvetica, Arial, sans-serif; text-decoration: none;"><span style="font-size: 11px; color: #00ff13;">unsubscribe</span></a> 
                              <br>
                              <span style="color: #a1a1a1;">{accountaddress}</span></span>
                          </p></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr>
            <tr>
              <td class="drow" valign="top" align="center" style="background-color: #c400a8; box-sizing: border-box; font-size: 0px; text-align: center;">
                <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                <div class="layer_2" style="max-width: 492px; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                    <tbody>
                      <tr>
                        <td valign="top" class="emptycell" style="padding: 0px;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr>
            <tr>
              <td class="drow" valign="top" align="center" style="background-color: #000000; box-sizing: border-box; font-size: 0px; text-align: center;">
                <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                <div class="layer_2" style="max-width: 492px; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                    <tbody>
                      <tr>
                        <td valign="top" class="emptycell" style="padding: 0px;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr>
            <tr>
              <td class="drow" valign="top" align="center" style="background-color: #000000; box-sizing: border-box; font-size: 0px; text-align: center;">
                <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                <div class="layer_2" style="max-width: 492px; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                    <tbody>
                      <tr>
                        <td valign="top" class="emptycell" style="padding: 0px;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr>
            <tr>
              <td class="drow" valign="top" align="center" style="background-color: #000000; box-sizing: border-box; font-size: 0px; text-align: center;">
                <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                <div class="layer_2" style="max-width: 492px; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                    <tbody>
                      <tr>
                        <td valign="top" class="emptycell" style="padding: 0px;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr>
            <tr>
              <td class="drow" valign="top" align="center" style="background-color: #000000; box-sizing: border-box; font-size: 0px; text-align: center;">
                <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                <div class="layer_2" style="max-width: 492px; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                    <tbody>
                      <tr>
                        <td valign="top" class="emptycell" style="padding: 20px;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr>
            <tr>
              <td class="drow" valign="top" align="center" style="background-color: #000000; box-sizing: border-box; font-size: 0px; text-align: center;">
                <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                <div class="layer_2" style="max-width: 61.5px; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                    <tbody>
                      <tr>
                        <td valign="top" class="emptycell" style="padding: 0px;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if (gte mso 9)|(IE)]></td><td valign="top"><![endif]-->
                <div class="layer_2" style="max-width: 61.5px; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                    <tbody>
                      <tr>
                        <td valign="top" class="emptycell" style="padding: 0px;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="layer_2" style="max-width: 61.5px; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                    <tbody>
                      <tr>
                        <td valign="top" class="edimg" style="padding: 0px; box-sizing: border-box; text-align: center;">
                          <img src="https://api.elasticemail.com/userfile/a18de9fc-4724-42f2-b203-4992ceddc1de/fb-template.png" alt="Image" width="40" style="border-width: 0px; border-style: none; max-width: 40px; width: 100%;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="layer_2" style="max-width: 61.5px; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                    <tbody>
                      <tr>
                        <td valign="top" class="edimg" style="padding: 0px; box-sizing: border-box; text-align: center;">
                          <img src="https://api.elasticemail.com/userfile/a18de9fc-4724-42f2-b203-4992ceddc1de/jutuby.png" alt="Image" width="40" style="border-width: 0px; border-style: none; max-width: 40px; width: 100%;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="layer_2" style="max-width: 61.5px; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                    <tbody>
                      <tr>
                        <td valign="top" class="edimg" style="padding: 0px; box-sizing: border-box; text-align: center;">
                          <img src="https://api.elasticemail.com/userfile/a18de9fc-4724-42f2-b203-4992ceddc1de/twit.png" alt="Image" width="47" style="border-width: 0px; border-style: none; max-width: 47px; width: 100%;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="layer_2" style="max-width: 61.5px; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                    <tbody>
                      <tr>
                        <td valign="top" class="edimg" style="padding: 0px; box-sizing: border-box; text-align: center;">
                          <img src="https://api.elasticemail.com/userfile/a18de9fc-4724-42f2-b203-4992ceddc1de/Mask_Group_1516.png" alt="Image" width="36" style="border-width: 0px; border-style: none; max-width: 36px; width: 100%;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="layer_2" style="max-width: 61.5px; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                    <tbody>
                      <tr>
                        <td valign="top" class="emptycell" style="padding: 0px;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="layer_2" style="max-width: 61.5px; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                    <tbody>
                      <tr>
                        <td valign="top" class="emptycell" style="padding: 0px;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr>
            <tr>
              <td class="drow" valign="top" align="center" style="background-color: #000000; box-sizing: border-box; font-size: 0px; text-align: center;">
                <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                <div class="layer_2" style="max-width: 492px; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                    <tbody>
                      <tr>
                        <td valign="top" class="emptycell" style="padding: 20px;">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
      </td>
    </tr>
  </tbody>
</table>
</body></html>`;
let recoveryPass = [`Dear ${userActive.name},`];
let purchase = [];



//! necesitamos llamar a esta funcion en cada instancia que se debe enviar el email, 
//!junto con el subject y la plantilla
function mail(){

 Email.send({
    SecureToken : "e73dca5d-a22d-4b8f-a374-705aa5aea127",
    To : `${to} ,  guaca33@gmail.com` ,
    From : "modogamerse@gmail.com",
    Subject : subject.subs,
    Body : suscribe,
 }).then(
  message => alert(message)
  )
}