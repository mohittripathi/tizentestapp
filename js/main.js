var sl1, sl2;


$(document).ready(function() {

    $("#driver").click(function(event) {

        $.getJSON('http://api.fixer.io/latest', function(jd) {

            var k = parseFloat(jd.rates.USD);
            var k1 = parseFloat(jd.rates.INR);
            var pp = k1 / k;

            sl1 = document.getElementById("fromcur").value;
            sl2 = document.getElementById("tocur").value;

            if (sl1 == sl2) {
                alert("Not applicable");
            } else if (sl1 == 3 && sl2 == 1) {
                var er = jd.rates.AUD;
                caleur(er);
            } else if (sl1 == 3 && sl2 == 2) {
                var er = jd.rates.CAD;
                caleur(er);

            } else if (sl1 == 3 && sl2 == 4) {
                var er = jd.rates.INR;
                caleur(er);

            } else if (sl1 == 3 && sl2 == 5) {
                var er = jd.rates.JPY;
                caleur(er);

            } else if (sl1 == 3 && sl2 == 6) {
                var er = jd.rates.NZD;
                caleur(er);

            } else if (sl1 == 3 && sl2 == 7) {
                var er = jd.rates.ZAR;
                caleur(er);

            } else if (sl1 == 3 && sl2 == 8) {

                var er = jd.rates.CHF;
                caleur(er);

            } else if (sl1 == 3 && sl2 == 9) {
                var er = jd.rates.GBP;
                caleur(er);

            } else if (sl1 == 3 && sl2 == 10) {
                var er = jd.rates.USD
                caleur(er);

            }
            else if (sl1 == 3 && sl2 == 11) {
                var er = jd.rates.BGN
                caleur(er);

            }
            
            else if (sl1 == 3 && sl2 == 12) {
                var er = jd.rates.BRL
                caleur(er);

            }
            
            else if (sl1 == 3 && sl2 == 13) {
                var er = jd.rates.CNY
                caleur(er);

            }

            else if (sl1 == 3 && sl2 == 14) {
                var er = jd.rates.CZK
                caleur(er);

            }
            else if (sl1 == 3 && sl2 == 15) {
                var er = jd.rates.DKK
                caleur(er);

            }
            else if (sl1 == 3 && sl2 == 16) {
                var er = jd.rates.HKD
                caleur(er);

            }

            else if (sl1 == 3 && sl2 == 17) {
                var er = jd.rates.HRK
                caleur(er);

            }
            else if (sl1 == 3 && sl2 == 18) {
                var er = jd.rates.HUF
                caleur(er);

            }
            else if (sl1 == 3 && sl2 == 19) {
                var er = jd.rates.IDR
                caleur(er);

            }

            else if (sl1 == 3 && sl2 == 20) {
                var er = jd.rates.ILS
                caleur(er);

            }
            else if (sl1 == 3 && sl2 == 21) {
                var er = jd.rates.KRW
                caleur(er);

            }
            else if (sl1 == 3 && sl2 == 22) {
                var er = jd.rates.MXN
                caleur(er);

            }
            else if (sl1 == 3 && sl2 == 23) {
                var er = jd.rates.MYR
                caleur(er);

            }
            else if (sl1 == 3 && sl2 == 24) {
                var er = jd.rates.NOK
                caleur(er);

            }
            else if (sl1 == 3 && sl2 == 25) {
                var er = jd.rates.PHP
                caleur(er);

            }
            else if (sl1 == 3 && sl2 == 26) {
                var er = jd.rates.PLN
                caleur(er);

            }

            else if (sl1 == 3 && sl2 == 27) {
                var er = jd.rates.RON
                caleur(er);

            }
            else if (sl1 == 3 && sl2 == 28) {
                var er = jd.rates.RUB
                caleur(er);

            }
            else if (sl1 == 3 && sl2 == 29) {
                var er = jd.rates.SEK
                caleur(er);

            }

            else if (sl1 == 3 && sl2 == 30) {
                var er = jd.rates.SGD
                caleur(er);

            }
            else if (sl1 == 3 && sl2 == 31) {
                var er = jd.rates.THB
                caleur(er);

            }
            else if (sl1 == 3 && sl2 == 32) {
                var er = jd.rates.BGN
                caleur(er);

            }

            
//*****************************************************************************************************            
            
            
            else if (sl1 == 4 && sl2 == 1) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.INR;
                var k4 = (k2 / k3);
                
                calculate(k4);
            } else if (sl1 == 4 && sl2 == 2) {
                var k2 = jd.rates.CAD;
                var k3 = jd.rates.INR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 4 && sl2 == 5) {
                var k2 = jd.rates.JPY;
                var k3 = jd.rates.INR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 4 && sl2 == 6) {
                var k2 = jd.rates.NZD;
                var k3 = jd.rates.INR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 4 && sl2 == 7) {
                var k2 = jd.rates.ZAR;
                var k3 = jd.rates.INR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 4 && sl2 == 8) {
                var k2 = jd.rates.CHF;
                var k3 = jd.rates.INR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 4 && sl2 == 9) {
                var k2 = jd.rates.GBP;
                var k3 = jd.rates.INR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 4 && sl2 == 10) {
                var k2 = jd.rates.USD;
                var k3 = jd.rates.INR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 4 && sl2 == 11) {
                var k2 = jd.rates.BGN;
                var k3 = jd.rates.INR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 4 && sl2 == 12) {
                var k2 = jd.rates.BRL;
                var k3 = jd.rates.INR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 4 && sl2 == 13) {
                var k2 = jd.rates.CNY;
                var k3 = jd.rates.INR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 4 && sl2 == 14) {
                var k2 = jd.rates.CZK;
                var k3 = jd.rates.INR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 4 && sl2 == 15) {
                var k2 = jd.rates.DKK;
                var k3 = jd.rates.INR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 4 && sl2 == 16) {
                var k2 = jd.rates.HKD;
                var k3 = jd.rates.INR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 4 && sl2 == 17) {
                var k2 = jd.rates.HRK;
                var k3 = jd.rates.INR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 4 && sl2 == 18) {
                var k2 = jd.rates.HUF;
                var k3 = jd.rates.INR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 4 && sl2 == 19) {
                var k2 = jd.rates.IDR;
                var k3 = jd.rates.INR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 4 && sl2 == 20) {
                var k2 = jd.rates.ILS;
                var k3 = jd.rates.INR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 4 && sl2 == 21) {
                var k2 = jd.rates.KRW;
                var k3 = jd.rates.INR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 4 && sl2 == 22) {
                var k2 = jd.rates.MXN;
                var k3 = jd.rates.INR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 4 && sl2 == 23) {
                var k2 = jd.rates.MYR;
                var k3 = jd.rates.INR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 4 && sl2 == 24) {
                var k2 = jd.rates.NOK;
                var k3 = jd.rates.INR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 4 && sl2 == 25) {
                var k2 = jd.rates.PHP;
                var k3 = jd.rates.INR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 4 && sl2 == 26) {
                var k2 = jd.rates.PLN;
                var k3 = jd.rates.INR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 4 && sl2 == 27) {
                var k2 = jd.rates.RON;
                var k3 = jd.rates.INR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 4 && sl2 == 28) {
                var k2 = jd.rates.RUB;
                var k3 = jd.rates.INR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 4 && sl2 == 29) {
                var k2 = jd.rates.SEK;
                var k3 = jd.rates.INR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 4 && sl2 == 30) {
                var k2 = jd.rates.SGD;
                var k3 = jd.rates.INR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 4 && sl2 == 31) {
                var k2 = jd.rates.THB;
                var k3 = jd.rates.INR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 4 && sl2 == 32) {
                var k2 = jd.rates.TRY;
                var k3 = jd.rates.INR;
                var k4 = (k2 / k3);
                calculate(k4);
            }
            //******************************************************
            else if (sl1 == 1 && sl2 == 2) {
                var k2 = jd.rates.CAD;
                var k3 = jd.rates.AUD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 1 && sl2 == 5) {
                var k2 = jd.rates.JPY;
                var k3 = jd.rates.AUD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 1 && sl2 == 6) {
                var k2 = jd.rates.NZD;
                var k3 = jd.rates.AUD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 1 && sl2 == 7) {
                var k2 = jd.rates.ZAR;
                var k3 = jd.rates.AUD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 1 && sl2 == 8) {
                var k2 = jd.rates.CHF;
                var k3 = jd.rates.AUD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 1 && sl2 == 9) {
                var k2 = jd.rates.GBP;
                var k3 = jd.rates.AUD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 1 && sl2 == 10) {
                var k2 = jd.rates.USD;
                var k3 = jd.rates.AUD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 1 && sl2 == 11) {
                var k2 = jd.rates.BGN;
                var k3 = jd.rates.AUD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 1 && sl2 == 12) {
                var k2 = jd.rates.BRL;
                var k3 = jd.rates.AUD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 1 && sl2 == 13) {
                var k2 = jd.rates.CNY;
                var k3 = jd.rates.AUD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 1 && sl2 == 14) {
                var k2 = jd.rates.CZK;
                var k3 = jd.rates.AUD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 1 && sl2 == 15) {
                var k2 = jd.rates.DKK;
                var k3 = jd.rates.AUD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 1 && sl2 == 16) {
                var k2 = jd.rates.HKD;
                var k3 = jd.rates.AUD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 1 && sl2 == 17) {
                var k2 = jd.rates.HRK;
                var k3 = jd.rates.AUD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 1 && sl2 == 18) {
                var k2 = jd.rates.HUF;
                var k3 = jd.rates.AUD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 1 && sl2 == 19) {
                var k2 = jd.rates.IDR;
                var k3 = jd.rates.AUD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 1 && sl2 == 20) {
                var k2 = jd.rates.ILS;
                var k3 = jd.rates.AUD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 1 && sl2 == 21) {
                var k2 = jd.rates.KRW;
                var k3 = jd.rates.AUD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 1 && sl2 == 22) {
                var k2 = jd.rates.MXN;
                var k3 = jd.rates.AUD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 1 && sl2 == 23) {
                var k2 = jd.rates.MYR;
                var k3 = jd.rates.AUD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 1 && sl2 == 24) {
                var k2 = jd.rates.NOK;
                var k3 = jd.rates.AUD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 1 && sl2 == 25) {
                var k2 = jd.rates.PHP;
                var k3 = jd.rates.AUD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 1 && sl2 == 26) {
                var k2 = jd.rates.PLN;
                var k3 = jd.rates.AUD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 1 && sl2 == 27) {
                var k2 = jd.rates.RON;
                var k3 = jd.rates.AUD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 1 && sl2 == 28) {
                var k2 = jd.rates.RUB;
                var k3 = jd.rates.AUD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 1 && sl2 == 29) {
                var k2 = jd.rates.SEK;
                var k3 = jd.rates.AUD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 1 && sl2 == 30) {
                var k2 = jd.rates.SGD;
                var k3 = jd.rates.AUD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 1 && sl2 == 31) {
                var k2 = jd.rates.THB;
                var k3 = jd.rates.AUD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 1 && sl2 == 32) {
                var k2 = jd.rates.TRY;
                var k3 = jd.rates.AUD;
                var k4 = (k2 / k3);
                calculate(k4);
            }

            //**************************************************************
            else if (sl1 == 2 && sl2 == 1) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 2 && sl2 == 3) {
                var k2 = jd.rates.EUR;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 2 && sl2 == 4) {
                var k2 = jd.rates.INR;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 2 && sl2 == 5) {
                var k2 = jd.rates.JPY;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 2 && sl2 == 6) {
                var k2 = jd.rates.NZD;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 2 && sl2 == 7) {
                var k2 = jd.rates.ZAR;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 2 && sl2 == 8) {
                var k2 = jd.rates.CHF;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 2 && sl2 == 9) {
                var k2 = jd.rates.GBP;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 2 && sl2 == 10) {
                var k2 = jd.rates.USD;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 2 && sl2 == 11) {
                var k2 = jd.rates.BGN;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 2 && sl2 == 12) {
                var k2 = jd.rates.BRL;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 2 && sl2 == 13) {
                var k2 = jd.rates.CNY;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 2 && sl2 == 14) {
                var k2 = jd.rates.CZK;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 2 && sl2 == 15) {
                var k2 = jd.rates.DKK;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 2 && sl2 == 16) {
                var k2 = jd.rates.HKD;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 2 && sl2 == 17) {
                var k2 = jd.rates.HRK;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 2 && sl2 == 18) {
                var k2 = jd.rates.HUF;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 2 && sl2 == 19) {
                var k2 = jd.rates.IDR;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 2 && sl2 == 20) {
                var k2 = jd.rates.ILS;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 2 && sl2 == 21) {
                var k2 = jd.rates.KRW;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl2 == 2 && sl2 == 22) {
                var k2 = jd.rates.MXN;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 2 && sl2 == 23) {
                var k2 = jd.rates.MYR;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 2 && sl2 == 24) {
                var k2 = jd.rates.NOK;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 2 && sl2 == 25) {
                var k2 = jd.rates.PHP;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 2 && sl2 == 26) {
                var k2 = jd.rates.PLN;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 2 && sl2 == 27) {
                var k2 = jd.rates.RON;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 2 && sl2 == 28) {
                var k2 = jd.rates.RUB;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 2 && sl2 == 29) {
                var k2 = jd.rates.SEK;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 2 && sl2 == 30) {
                var k2 = jd.rates.SGD;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 2 && sl2 == 31) {
                var k2 = jd.rates.THB;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 2 && sl2 == 32) {
                var k2 = jd.rates.TRY;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            }


            //**********************************************************************************
            else if (sl1 == 5 && sl2 == 1) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.JPY;
                var k4 = (k2 / k3);
                calculate(k4);
            }else if (sl1 == 5 && sl2 == 2) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.JPY;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
           
            /*else if (sl1 == 5 && sl2 == 3) {
                var k2 = jd.rates.EUR;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } */
            else if (sl1 == 5 && sl2 == 4) {
                var k2 = jd.rates.INR;
                var k3 = jd.rates.JPY;
                var k4 = (k2 / k3);
                calculate(k4);
            }  else if (sl1 == 5 && sl2 == 6) {
                var k2 = jd.rates.NZD;
                var k3 = jd.rates.JPY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 5 && sl2 == 7) {
                var k2 = jd.rates.ZAR;
                var k3 = jd.rates.JPY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 5 && sl2 == 8) {
                var k2 = jd.rates.CHF;
                var k3 = jd.rates.JPY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 5 && sl2 == 9) {
                var k2 = jd.rates.GBP;
                var k3 = jd.rates.JPY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 5 && sl2 == 10) {
                var k2 = jd.rates.USD;
                var k3 = jd.rates.JPY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 5 && sl2 == 11) {
                var k2 = jd.rates.BGN;
                var k3 = jd.rates.JPY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 5 && sl2 == 12) {
                var k2 = jd.rates.BRL;
                var k3 = jd.rates.JPY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 5 && sl2 == 13) {
                var k2 = jd.rates.CNY;
                var k3 = jd.rates.JPY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 5 && sl2 == 14) {
                var k2 = jd.rates.CZK;
                var k3 = jd.rates.JPY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 5 && sl2 == 15) {
                var k2 = jd.rates.DKK;
                var k3 = jd.rates.JPY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 5 && sl2 == 16) {
                var k2 = jd.rates.HKD;
                var k3 = jd.rates.JPY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 5 && sl2 == 17) {
                var k2 = jd.rates.HRK;
                var k3 = jd.rates.JPY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 5 && sl2 == 18) {
                var k2 = jd.rates.HUF;
                var k3 = jd.rates.JPY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 5 && sl2 == 19) {
                var k2 = jd.rates.IDR;
                var k3 = jd.rates.JPY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 5 && sl2 == 20) {
                var k2 = jd.rates.ILS;
                var k3 = jd.rates.JPY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 5 && sl2 == 21) {
                var k2 = jd.rates.KRW;
                var k3 = jd.rates.JPY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl2 == 5 && sl2 == 22) {
                var k2 = jd.rates.MXN;
                var k3 = jd.rates.JPY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 5 && sl2 == 23) {
                var k2 = jd.rates.MYR;
                var k3 = jd.rates.JPY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 5 && sl2 == 24) {
                var k2 = jd.rates.NOK;
                var k3 = jd.rates.JPY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 5 && sl2 == 25) {
                var k2 = jd.rates.PHP;
                var k3 = jd.rates.JPY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 5 && sl2 == 26) {
                var k2 = jd.rates.PLN;
                var k3 = jd.rates.JPY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 5 && sl2 == 27) {
                var k2 = jd.rates.RON;
                var k3 = jd.rates.JPY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 5 && sl2 == 28) {
                var k2 = jd.rates.RUB;
                var k3 = jd.rates.JPY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 5 && sl2 == 29) {
                var k2 = jd.rates.SEK;
                var k3 = jd.rates.JPY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 5 && sl2 == 30) {
                var k2 = jd.rates.SGD;
                var k3 = jd.rates.JPY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 5 && sl2 == 31) {
                var k2 = jd.rates.THB;
                var k3 = jd.rates.JPY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 5 && sl2 == 32) {
                var k2 = jd.rates.TRY;
                var k3 = jd.rates.JPY;
                var k4 = (k2 / k3);
                calculate(k4);
            }

//*********************************************************************************************


            else if (sl1 == 6 && sl2 == 1) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.NZD;
                var k4 = (k2 / k3);
                calculate(k4);
            }else if (sl1 == 6 && sl2 == 2) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.NZD;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
           
            else if (sl1 == 6 && sl2 == 3) {
                var k2 = jd.rates.EUR;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
            else if (sl1 == 6 && sl2 == 4) {
                var k2 = jd.rates.INR;
                var k3 = jd.rates.NZD;
                var k4 = (k2 / k3);
                calculate(k4);
            }  else if (sl1 == 6 && sl2 == 5) {
                var k2 = jd.rates.JPY;
                var k3 = jd.rates.NZD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 6 && sl2 == 7) {
                var k2 = jd.rates.ZAR;
                var k3 = jd.rates.NZD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 6 && sl2 == 8) {
                var k2 = jd.rates.CHF;
                var k3 = jd.rates.NZD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 6 && sl2 == 9) {
                var k2 = jd.rates.GBP;
                var k3 = jd.rates.NZD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 6 && sl2 == 10) {
                var k2 = jd.rates.USD;
                var k3 = jd.rates.NZD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 6 && sl2 == 11) {
                var k2 = jd.rates.BGN;
                var k3 = jd.rates.NZD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 6 && sl2 == 12) {
                var k2 = jd.rates.BRL;
                var k3 = jd.rates.NZD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 6 && sl2 == 13) {
                var k2 = jd.rates.CNY;
                var k3 = jd.rates.NZD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 6 && sl2 == 14) {
                var k2 = jd.rates.CZK;
                var k3 = jd.rates.NZD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 6 && sl2 == 16) {
                var k2 = jd.rates.DKK;
                var k3 = jd.rates.NZD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 6 && sl2 == 16) {
                var k2 = jd.rates.HKD;
                var k3 = jd.rates.NZD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 6 && sl2 == 17) {
                var k2 = jd.rates.HRK;
                var k3 = jd.rates.NZD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 6 && sl2 == 18) {
                var k2 = jd.rates.HUF;
                var k3 = jd.rates.NZD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 6 && sl2 == 19) {
                var k2 = jd.rates.IDR;
                var k3 = jd.rates.NZD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 6 && sl2 == 20) {
                var k2 = jd.rates.ILS;
                var k3 = jd.rates.NZD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 6 && sl2 == 21) {
                var k2 = jd.rates.KRW;
                var k3 = jd.rates.NZD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl2 == 6 && sl2 == 22) {
                var k2 = jd.rates.MXN;
                var k3 = jd.rates.NZD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 6 && sl2 == 23) {
                var k2 = jd.rates.MYR;
                var k3 = jd.rates.NZD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 6 && sl2 == 24) {
                var k2 = jd.rates.NOK;
                var k3 = jd.rates.NZD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 6 && sl2 == 26) {
                var k2 = jd.rates.PHP;
                var k3 = jd.rates.NZD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 6 && sl2 == 26) {
                var k2 = jd.rates.PLN;
                var k3 = jd.rates.NZD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 6 && sl2 == 27) {
                var k2 = jd.rates.RON;
                var k3 = jd.rates.NZD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 6 && sl2 == 28) {
                var k2 = jd.rates.RUB;
                var k3 = jd.rates.NZD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 6 && sl2 == 29) {
                var k2 = jd.rates.SEK;
                var k3 = jd.rates.NZD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 6 && sl2 == 30) {
                var k2 = jd.rates.SGD;
                var k3 = jd.rates.NZD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 6 && sl2 == 31) {
                var k2 = jd.rates.THB;
                var k3 = jd.rates.NZD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 6 && sl2 == 32) {
                var k2 = jd.rates.TRY;
                var k3 = jd.rates.NZD;
                var k4 = (k2 / k3);
                calculate(k4);
            }
//**********************************************************************************************
            else if (sl1 == 7 && sl2 == 1) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.ZAR;
                var k4 = (k2 / k3);
                calculate(k4);
            }else if (sl1 == 7 && sl2 == 2) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.ZAR;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
           
            else if (sl1 == 7 && sl2 == 3) {
                var k2 = jd.rates.EUR;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
            else if (sl1 == 7 && sl2 == 4) {
                var k2 = jd.rates.INR;
                var k3 = jd.rates.ZAR;
                var k4 = (k2 / k3);
                calculate(k4);
            }  else if (sl1 == 7 && sl2 == 5) {
                var k2 = jd.rates.JPY;
                var k3 = jd.rates.ZAR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 7 && sl2 == 6) {
                var k2 = jd.rates.NZD;
                var k3 = jd.rates.ZAR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 7 && sl2 == 8) {
                var k2 = jd.rates.CHF;
                var k3 = jd.rates.ZAR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 7 && sl2 == 9) {
                var k2 = jd.rates.GBP;
                var k3 = jd.rates.ZAR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 7 && sl2 == 10) {
                var k2 = jd.rates.USD;
                var k3 = jd.rates.ZAR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 7 && sl2 == 11) {
                var k2 = jd.rates.BGN;
                var k3 = jd.rates.ZAR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 7 && sl2 == 12) {
                var k2 = jd.rates.BRL;
                var k3 = jd.rates.ZAR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 7 && sl2 == 13) {
                var k2 = jd.rates.CNY;
                var k3 = jd.rates.ZAR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 7 && sl2 == 14) {
                var k2 = jd.rates.CZK;
                var k3 = jd.rates.ZAR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 7 && sl2 == 17) {
                var k2 = jd.rates.DKK;
                var k3 = jd.rates.ZAR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 7 && sl2 == 17) {
                var k2 = jd.rates.HKD;
                var k3 = jd.rates.ZAR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 7 && sl2 == 17) {
                var k2 = jd.rates.HRK;
                var k3 = jd.rates.ZAR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 7 && sl2 == 18) {
                var k2 = jd.rates.HUF;
                var k3 = jd.rates.ZAR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 7 && sl2 == 19) {
                var k2 = jd.rates.IDR;
                var k3 = jd.rates.ZAR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 7 && sl2 == 20) {
                var k2 = jd.rates.ILS;
                var k3 = jd.rates.ZAR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 7 && sl2 == 21) {
                var k2 = jd.rates.KRW;
                var k3 = jd.rates.ZAR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl2 == 7 && sl2 == 22) {
                var k2 = jd.rates.MXN;
                var k3 = jd.rates.ZAR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 7 && sl2 == 23) {
                var k2 = jd.rates.MYR;
                var k3 = jd.rates.ZAR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 7 && sl2 == 24) {
                var k2 = jd.rates.NOK;
                var k3 = jd.rates.ZAR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 7 && sl2 == 27) {
                var k2 = jd.rates.PHP;
                var k3 = jd.rates.ZAR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 7 && sl2 == 27) {
                var k2 = jd.rates.PLN;
                var k3 = jd.rates.ZAR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 7 && sl2 == 27) {
                var k2 = jd.rates.RON;
                var k3 = jd.rates.ZAR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 7 && sl2 == 28) {
                var k2 = jd.rates.RUB;
                var k3 = jd.rates.ZAR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 7 && sl2 == 29) {
                var k2 = jd.rates.SEK;
                var k3 = jd.rates.ZAR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 7 && sl2 == 30) {
                var k2 = jd.rates.SGD;
                var k3 = jd.rates.ZAR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 7 && sl2 == 31) {
                var k2 = jd.rates.THB;
                var k3 = jd.rates.ZAR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 7 && sl2 == 32) {
                var k2 = jd.rates.TRY;
                var k3 = jd.rates.ZAR;
                var k4 = (k2 / k3);
                calculate(k4);
            }

 //********************************************************************************************
            
            else if (sl1 == 8 && sl2 == 1) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.CHF;
                var k4 = (k2 / k3);
                calculate(k4);
            }else if (sl1 == 8 && sl2 == 2) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.CHF;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
           
            else if (sl1 == 8 && sl2 == 3) {
                var k2 = jd.rates.EUR;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
            else if (sl1 == 8 && sl2 == 4) {
                var k2 = jd.rates.INR;
                var k3 = jd.rates.CHF;
                var k4 = (k2 / k3);
                calculate(k4);
            }  else if (sl1 == 8 && sl2 == 5) {
                var k2 = jd.rates.JPY;
                var k3 = jd.rates.CHF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 8 && sl2 == 6) {
                var k2 = jd.rates.NZD;
                var k3 = jd.rates.CHF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 8 && sl2 == 7) {
                var k2 = jd.rates.ZAR;
                var k3 = jd.rates.CHF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 8 && sl2 == 9) {
                var k2 = jd.rates.GBP;
                var k3 = jd.rates.CHF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 8 && sl2 == 10) {
                var k2 = jd.rates.USD;
                var k3 = jd.rates.CHF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 8 && sl2 == 11) {
                var k2 = jd.rates.BGN;
                var k3 = jd.rates.CHF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 8 && sl2 == 12) {
                var k2 = jd.rates.BRL;
                var k3 = jd.rates.CHF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 8 && sl2 == 13) {
                var k2 = jd.rates.CNY;
                var k3 = jd.rates.CHF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 8 && sl2 == 14) {
                var k2 = jd.rates.CZK;
                var k3 = jd.rates.CHF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 8 && sl2 == 18) {
                var k2 = jd.rates.DKK;
                var k3 = jd.rates.CHF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 8 && sl2 == 18) {
                var k2 = jd.rates.HKD;
                var k3 = jd.rates.CHF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 8 && sl2 == 18) {
                var k2 = jd.rates.HRK;
                var k3 = jd.rates.CHF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 8 && sl2 == 18) {
                var k2 = jd.rates.HUF;
                var k3 = jd.rates.CHF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 8 && sl2 == 19) {
                var k2 = jd.rates.IDR;
                var k3 = jd.rates.CHF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 8 && sl2 == 20) {
                var k2 = jd.rates.ILS;
                var k3 = jd.rates.CHF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 8 && sl2 == 21) {
                var k2 = jd.rates.KRW;
                var k3 = jd.rates.CHF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl2 == 8 && sl2 == 22) {
                var k2 = jd.rates.MXN;
                var k3 = jd.rates.CHF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 8 && sl2 == 23) {
                var k2 = jd.rates.MYR;
                var k3 = jd.rates.CHF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 8 && sl2 == 24) {
                var k2 = jd.rates.NOK;
                var k3 = jd.rates.CHF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 8 && sl2 == 28) {
                var k2 = jd.rates.PHP;
                var k3 = jd.rates.CHF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 8 && sl2 == 28) {
                var k2 = jd.rates.PLN;
                var k3 = jd.rates.CHF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 8 && sl2 == 28) {
                var k2 = jd.rates.RON;
                var k3 = jd.rates.CHF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 8 && sl2 == 28) {
                var k2 = jd.rates.RUB;
                var k3 = jd.rates.CHF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 8 && sl2 == 29) {
                var k2 = jd.rates.SEK;
                var k3 = jd.rates.CHF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 8 && sl2 == 30) {
                var k2 = jd.rates.SGD;
                var k3 = jd.rates.CHF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 8 && sl2 == 31) {
                var k2 = jd.rates.THB;
                var k3 = jd.rates.CHF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 8 && sl2 == 32) {
                var k2 = jd.rates.TRY;
                var k3 = jd.rates.CHF;
                var k4 = (k2 / k3);
                calculate(k4);
            }

            
//***************************************************************************************
            
            else if (sl1 == 9 && sl2 == 1) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.GBP;
                var k4 = (k2 / k3);
                calculate(k4);
            }else if (sl1 == 9 && sl2 == 2) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.GBP;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
           
            else if (sl1 == 9 && sl2 == 3) {
                var k2 = jd.rates.EUR;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
            else if (sl1 == 9 && sl2 == 4) {
                var k2 = jd.rates.INR;
                var k3 = jd.rates.GBP;
                var k4 = (k2 / k3);
                calculate(k4);
            }  else if (sl1 == 9 && sl2 == 5) {
                var k2 = jd.rates.JPY;
                var k3 = jd.rates.GBP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 9 && sl2 == 6) {
                var k2 = jd.rates.NZD;
                var k3 = jd.rates.GBP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 9 && sl2 == 7) {
                var k2 = jd.rates.ZAR;
                var k3 = jd.rates.GBP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 9 && sl2 == 8) {
                var k2 = jd.rates.CHF;
                var k3 = jd.rates.GBP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 9 && sl2 == 10) {
                var k2 = jd.rates.USD;
                var k3 = jd.rates.GBP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 9 && sl2 == 11) {
                var k2 = jd.rates.BGN;
                var k3 = jd.rates.GBP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 9 && sl2 == 12) {
                var k2 = jd.rates.BRL;
                var k3 = jd.rates.GBP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 9 && sl2 == 13) {
                var k2 = jd.rates.CNY;
                var k3 = jd.rates.GBP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 9 && sl2 == 14) {
                var k2 = jd.rates.CZK;
                var k3 = jd.rates.GBP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 9 && sl2 == 19) {
                var k2 = jd.rates.DKK;
                var k3 = jd.rates.GBP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 9 && sl2 == 19) {
                var k2 = jd.rates.HKD;
                var k3 = jd.rates.GBP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 9 && sl2 == 19) {
                var k2 = jd.rates.HRK;
                var k3 = jd.rates.GBP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 9 && sl2 == 19) {
                var k2 = jd.rates.HUF;
                var k3 = jd.rates.GBP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 9 && sl2 == 19) {
                var k2 = jd.rates.IDR;
                var k3 = jd.rates.GBP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 9 && sl2 == 20) {
                var k2 = jd.rates.ILS;
                var k3 = jd.rates.GBP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 9 && sl2 == 21) {
                var k2 = jd.rates.KRW;
                var k3 = jd.rates.GBP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl2 == 9 && sl2 == 22) {
                var k2 = jd.rates.MXN;
                var k3 = jd.rates.GBP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 9 && sl2 == 23) {
                var k2 = jd.rates.MYR;
                var k3 = jd.rates.GBP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 9 && sl2 == 24) {
                var k2 = jd.rates.NOK;
                var k3 = jd.rates.GBP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 9 && sl2 == 29) {
                var k2 = jd.rates.PHP;
                var k3 = jd.rates.GBP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 9 && sl2 == 29) {
                var k2 = jd.rates.PLN;
                var k3 = jd.rates.GBP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 9 && sl2 == 29) {
                var k2 = jd.rates.RON;
                var k3 = jd.rates.GBP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 9 && sl2 == 29) {
                var k2 = jd.rates.RUB;
                var k3 = jd.rates.GBP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 9 && sl2 == 29) {
                var k2 = jd.rates.SEK;
                var k3 = jd.rates.GBP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 9 && sl2 == 30) {
                var k2 = jd.rates.SGD;
                var k3 = jd.rates.GBP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 9 && sl2 == 31) {
                var k2 = jd.rates.THB;
                var k3 = jd.rates.GBP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 9 && sl2 == 32) {
                var k2 = jd.rates.TRY;
                var k3 = jd.rates.GBP;
                var k4 = (k2 / k3);
                calculate(k4);
            }

//********************************************************************************************
            
            
            
            else if (sl1 ==  10 && sl2 == 1) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.USD;
                var k4 = (k2 / k3);
                calculate(k4);
            }else if (sl1 == 10  && sl2 == 2) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.USD;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
           
            else if (sl1 == 10 && sl2 == 3) {
                var k2 = jd.rates.EUR;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
            else if (sl1 == 10 && sl2 == 4) {
                var k2 = jd.rates.INR;
                var k3 = jd.rates.USD;
                var k4 = (k2 / k3);
                calculate(k4);
            }  else if (sl1 == 10 && sl2 == 5) {
                var k2 = jd.rates.JPY;
                var k3 = jd.rates.USD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 10 && sl2 == 6) {
                var k2 = jd.rates.NZD;
                var k3 = jd.rates.USD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 10 && sl2 == 7) {
                var k2 = jd.rates.ZAR;
                var k3 = jd.rates.USD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 10 && sl2 == 8) {
                var k2 = jd.rates.CHF;
                var k3 = jd.rates.USD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 10 && sl2 == 9) {
                var k2 = jd.rates.USD;
                var k3 = jd.rates.USD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 10 && sl2 == 11) {
                var k2 = jd.rates.BGN;
                var k3 = jd.rates.USD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 10 && sl2 == 12) {
                var k2 = jd.rates.BRL;
                var k3 = jd.rates.USD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 10 && sl2 == 13) {
                var k2 = jd.rates.CNY;
                var k3 = jd.rates.USD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 10 && sl2 == 14) {
                var k2 = jd.rates.CZK;
                var k3 = jd.rates.USD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 10 && sl2 == 15) {
                var k2 = jd.rates.DKK;
                var k3 = jd.rates.USD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 10 && sl2 == 16) {
                var k2 = jd.rates.HKD;
                var k3 = jd.rates.USD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 10 && sl2 == 17) {
                var k2 = jd.rates.HRK;
                var k3 = jd.rates.USD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 10 && sl2 == 18) {
                var k2 = jd.rates.HUF;
                var k3 = jd.rates.USD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 10 && sl2 == 19) {
                var k2 = jd.rates.IDR;
                var k3 = jd.rates.USD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 10 && sl2 == 20) {
                var k2 = jd.rates.ILS;
                var k3 = jd.rates.USD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 10 && sl2 == 21) {
                var k2 = jd.rates.KRW;
                var k3 = jd.rates.USD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl2 == 10 && sl2 == 22) {
                var k2 = jd.rates.MXN;
                var k3 = jd.rates.USD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 10 && sl2 == 23) {
                var k2 = jd.rates.MYR;
                var k3 = jd.rates.USD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 10 && sl2 == 24) {
                var k2 = jd.rates.NOK;
                var k3 = jd.rates.USD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 10 && sl2 == 25) {
                var k2 = jd.rates.PHP;
                var k3 = jd.rates.USD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 10 && sl2 == 26) {
                var k2 = jd.rates.PLN;
                var k3 = jd.rates.USD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 10 && sl2 == 27) {
                var k2 = jd.rates.RON;
                var k3 = jd.rates.USD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 10 && sl2 == 28) {
                var k2 = jd.rates.RUB;
                var k3 = jd.rates.USD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 10 && sl2 == 29) {
                var k2 = jd.rates.SEK;
                var k3 = jd.rates.USD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 10 && sl2 == 30) {
                var k2 = jd.rates.SGD;
                var k3 = jd.rates.USD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 10 && sl2 == 31) {
                var k2 = jd.rates.THB;
                var k3 = jd.rates.USD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 10 && sl2 == 32) {
                var k2 = jd.rates.TRY;
                var k3 = jd.rates.USD;
                var k4 = (k2 / k3);
                calculate(k4);
            }

//********************************************************************************************************
            
            else if (sl1 ==  11 && sl2 == 1) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.BGN;
                var k4 = (k2 / k3);
                calculate(k4);
            }else if (sl1 == 11  && sl2 == 2) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.BGN;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
           
            else if (sl1 == 11 && sl2 == 3) {
                var k2 = jd.rates.EUR;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
            else if (sl1 == 911 && sl2 == 4) {
                var k2 = jd.rates.INR;
                var k3 = jd.rates.BGN;
                var k4 = (k2 / k3);
                calculate(k4);
            }  else if (sl1 == 11 && sl2 == 5) {
                var k2 = jd.rates.JPY;
                var k3 = jd.rates.BGN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 11 && sl2 == 6) {
                var k2 = jd.rates.NZD;
                var k3 = jd.rates.BGN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 11 && sl2 == 7) {
                var k2 = jd.rates.ZAR;
                var k3 = jd.rates.BGN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 11 && sl2 == 8) {
                var k2 = jd.rates.CHF;
                var k3 = jd.rates.BGN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 11 && sl2 == 9) {
                var k2 = jd.rates.GBP;
                var k3 = jd.rates.BGN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 11 && sl2 == 10) {
                var k2 = jd.rates.USD;
                var k3 = jd.rates.BGN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 11 && sl2 == 12) {
                var k2 = jd.rates.BRL;
                var k3 = jd.rates.BGN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 11 && sl2 == 13) {
                var k2 = jd.rates.CNY;
                var k3 = jd.rates.BGN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 11 && sl2 == 14) {
                var k2 = jd.rates.CZK;
                var k3 = jd.rates.BGN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 11 && sl2 == 15) {
                var k2 = jd.rates.DKK;
                var k3 = jd.rates.BGN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 11 && sl2 == 16) {
                var k2 = jd.rates.HKD;
                var k3 = jd.rates.BGN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 11 && sl2 == 17) {
                var k2 = jd.rates.HRK;
                var k3 = jd.rates.BGN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 11 && sl2 == 18) {
                var k2 = jd.rates.HUF;
                var k3 = jd.rates.BGN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 11 && sl2 == 19) {
                var k2 = jd.rates.IDR;
                var k3 = jd.rates.BGN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 11 && sl2 == 20) {
                var k2 = jd.rates.ILS;
                var k3 = jd.rates.BGN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 11 && sl2 == 21) {
                var k2 = jd.rates.KRW;
                var k3 = jd.rates.BGN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl2 == 11 && sl2 == 22) {
                var k2 = jd.rates.MXN;
                var k3 = jd.rates.BGN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 11 && sl2 == 23) {
                var k2 = jd.rates.MYR;
                var k3 = jd.rates.BGN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 11 && sl2 == 24) {
                var k2 = jd.rates.NOK;
                var k3 = jd.rates.BGN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 11 && sl2 == 25) {
                var k2 = jd.rates.PHP;
                var k3 = jd.rates.BGN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 11 && sl2 == 26) {
                var k2 = jd.rates.PLN;
                var k3 = jd.rates.BGN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 11 && sl2 == 27) {
                var k2 = jd.rates.RON;
                var k3 = jd.rates.BGN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 11 && sl2 == 28) {
                var k2 = jd.rates.RUB;
                var k3 = jd.rates.BGN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 11 && sl2 == 29) {
                var k2 = jd.rates.SEK;
                var k3 = jd.rates.BGN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 11 && sl2 == 30) {
                var k2 = jd.rates.SGD;
                var k3 = jd.rates.BGN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 11 && sl2 == 31) {
                var k2 = jd.rates.THB;
                var k3 = jd.rates.BGN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 11 && sl2 == 32) {
                var k2 = jd.rates.TRY;
                var k3 = jd.rates.BGN;
                var k4 = (k2 / k3);
                calculate(k4);
            }


//**************************************************************************************
            
            else if (sl1 ==  12 && sl2 == 1) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.BRL;
                var k4 = (k2 / k3);
                calculate(k4);
            }else if (sl1 == 12  && sl2 == 2) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.BRL;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
           
            else if (sl1 == 12 && sl2 == 3) {
                var k2 = jd.rates.EUR;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
            else if (sl1 == 12 && sl2 == 4) {
                var k2 = jd.rates.INR;
                var k3 = jd.rates.BRL;
                var k4 = (k2 / k3);
                calculate(k4);
            }  else if (sl1 == 12 && sl2 == 5) {
                var k2 = jd.rates.JPY;
                var k3 = jd.rates.BRL;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 12 && sl2 == 6) {
                var k2 = jd.rates.NZD;
                var k3 = jd.rates.BRL;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 12 && sl2 == 7) {
                var k2 = jd.rates.ZAR;
                var k3 = jd.rates.BRL;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 12 && sl2 == 8) {
                var k2 = jd.rates.CHF;
                var k3 = jd.rates.BRL;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 12 && sl2 == 9) {
                var k2 = jd.rates.GBP;
                var k3 = jd.rates.BRL;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 12 && sl2 == 10) {
                var k2 = jd.rates.USD;
                var k3 = jd.rates.BRL;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 12 && sl2 == 11) {
                var k2 = jd.rates.BGN;
                var k3 = jd.rates.BRL;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 12 && sl2 == 13) {
                var k2 = jd.rates.CNY;
                var k3 = jd.rates.BRL;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 12 && sl2 == 14) {
                var k2 = jd.rates.CZK;
                var k3 = jd.rates.BRL;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 12 && sl2 == 15) {
                var k2 = jd.rates.DKK;
                var k3 = jd.rates.BRL;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 12 && sl2 == 16) {
                var k2 = jd.rates.HKD;
                var k3 = jd.rates.BRL;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 12 && sl2 == 17) {
                var k2 = jd.rates.HRK;
                var k3 = jd.rates.BRL;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 12 && sl2 == 18) {
                var k2 = jd.rates.HUF;
                var k3 = jd.rates.BRL;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 12 && sl2 == 19) {
                var k2 = jd.rates.IDR;
                var k3 = jd.rates.BRL;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 12 && sl2 == 20) {
                var k2 = jd.rates.ILS;
                var k3 = jd.rates.BRL;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 12 && sl2 == 21) {
                var k2 = jd.rates.KRW;
                var k3 = jd.rates.BRL;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl2 == 12 && sl2 == 22) {
                var k2 = jd.rates.MXN;
                var k3 = jd.rates.BRL;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 12 && sl2 == 23) {
                var k2 = jd.rates.MYR;
                var k3 = jd.rates.BRL;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 12 && sl2 == 24) {
                var k2 = jd.rates.NOK;
                var k3 = jd.rates.BRL;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 12 && sl2 == 25) {
                var k2 = jd.rates.PHP;
                var k3 = jd.rates.BRL;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 12 && sl2 == 26) {
                var k2 = jd.rates.PLN;
                var k3 = jd.rates.BRL;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 12 && sl2 == 27) {
                var k2 = jd.rates.RON;
                var k3 = jd.rates.BRL;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 12 && sl2 == 28) {
                var k2 = jd.rates.RUB;
                var k3 = jd.rates.BRL;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 12 && sl2 == 29) {
                var k2 = jd.rates.SEK;
                var k3 = jd.rates.BRL;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 12 && sl2 == 30) {
                var k2 = jd.rates.SGD;
                var k3 = jd.rates.BRL;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 12 && sl2 == 31) {
                var k2 = jd.rates.THB;
                var k3 = jd.rates.BRL;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 12 && sl2 == 32) {
                var k2 = jd.rates.TRY;
                var k3 = jd.rates.BRL;
                var k4 = (k2 / k3);
                calculate(k4);
            }

//********************************************************************************
            else if (sl1 ==  13 && sl2 == 1) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.CNY;
                var k4 = (k2 / k3);
                calculate(k4);
            }else if (sl1 == 13  && sl2 == 2) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.CNY;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
           
            else if (sl1 == 13 && sl2 == 3) {
                var k2 = jd.rates.EUR;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
            else if (sl1 == 13 && sl2 == 4) {
                var k2 = jd.rates.INR;
                var k3 = jd.rates.CNY;
                var k4 = (k2 / k3);
                calculate(k4);
            }  else if (sl1 == 13 && sl2 == 5) {
                var k2 = jd.rates.JPY;
                var k3 = jd.rates.CNY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 13 && sl2 == 6) {
                var k2 = jd.rates.NZD;
                var k3 = jd.rates.CNY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 13 && sl2 == 7) {
                var k2 = jd.rates.ZAR;
                var k3 = jd.rates.CNY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 13 && sl2 == 8) {
                var k2 = jd.rates.CHF;
                var k3 = jd.rates.CNY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 13 && sl2 == 9) {
                var k2 = jd.rates.GBP;
                var k3 = jd.rates.CNY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 13 && sl2 == 10) {
                var k2 = jd.rates.USD;
                var k3 = jd.rates.CNY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 13 && sl2 == 11) {
                var k2 = jd.rates.BGN;
                var k3 = jd.rates.CNY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 13 && sl2 == 12) {
                var k2 = jd.rates.BRL;
                var k3 = jd.rates.CNY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 13 && sl2 == 14) {
                var k2 = jd.rates.CZK;
                var k3 = jd.rates.CNY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 13 && sl2 == 15) {
                var k2 = jd.rates.DKK;
                var k3 = jd.rates.CNY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 13 && sl2 == 16) {
                var k2 = jd.rates.HKD;
                var k3 = jd.rates.CNY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 13 && sl2 == 17) {
                var k2 = jd.rates.HRK;
                var k3 = jd.rates.CNY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 13 && sl2 == 18) {
                var k2 = jd.rates.HUF;
                var k3 = jd.rates.CNY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 13 && sl2 == 19) {
                var k2 = jd.rates.IDR;
                var k3 = jd.rates.CNY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 13 && sl2 == 20) {
                var k2 = jd.rates.ILS;
                var k3 = jd.rates.CNY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 13 && sl2 == 21) {
                var k2 = jd.rates.KRW;
                var k3 = jd.rates.CNY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl2 == 13 && sl2 == 22) {
                var k2 = jd.rates.MXN;
                var k3 = jd.rates.CNY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 13 && sl2 == 23) {
                var k2 = jd.rates.MYR;
                var k3 = jd.rates.CNY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 13 && sl2 == 24) {
                var k2 = jd.rates.NOK;
                var k3 = jd.rates.CNY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 13 && sl2 == 25) {
                var k2 = jd.rates.PHP;
                var k3 = jd.rates.CNY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 13 && sl2 == 26) {
                var k2 = jd.rates.PLN;
                var k3 = jd.rates.CNY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 13 && sl2 == 27) {
                var k2 = jd.rates.RON;
                var k3 = jd.rates.CNY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 13 && sl2 == 28) {
                var k2 = jd.rates.RUB;
                var k3 = jd.rates.CNY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 13 && sl2 == 29) {
                var k2 = jd.rates.SEK;
                var k3 = jd.rates.CNY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 13 && sl2 == 30) {
                var k2 = jd.rates.SGD;
                var k3 = jd.rates.CNY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 13 && sl2 == 31) {
                var k2 = jd.rates.THB;
                var k3 = jd.rates.CNY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 13 && sl2 == 32) {
                var k2 = jd.rates.TRY;
                var k3 = jd.rates.CNY;
                var k4 = (k2 / k3);
                calculate(k4);
            }

            
  //*****************************************************************************
            else if (sl1 ==  14 && sl2 == 1) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.CZK;
                var k4 = (k2 / k3);
                calculate(k4);
            }else if (sl1 == 14  && sl2 == 2) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.CZK;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
           
            else if (sl1 == 14 && sl2 == 3) {
                var k2 = jd.rates.EUR;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
            else if (sl1 == 14 && sl2 == 4) {
                var k2 = jd.rates.INR;
                var k3 = jd.rates.CZK;
                var k4 = (k2 / k3);
                calculate(k4);
            }  else if (sl1 == 14 && sl2 == 5) {
                var k2 = jd.rates.JPY;
                var k3 = jd.rates.CZK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 14 && sl2 == 6) {
                var k2 = jd.rates.NZD;
                var k3 = jd.rates.CZK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 14 && sl2 == 7) {
                var k2 = jd.rates.ZAR;
                var k3 = jd.rates.CZK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 14 && sl2 == 8) {
                var k2 = jd.rates.CHF;
                var k3 = jd.rates.CZK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 14 && sl2 == 9) {
                var k2 = jd.rates.GBP;
                var k3 = jd.rates.CZK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 14 && sl2 == 10) {
                var k2 = jd.rates.USD;
                var k3 = jd.rates.CZK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 14 && sl2 == 11) {
                var k2 = jd.rates.BGN;
                var k3 = jd.rates.CZK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 14 && sl2 == 12) {
                var k2 = jd.rates.BRL;
                var k3 = jd.rates.CZK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 14 && sl2 == 13) {
                var k2 = jd.rates.CNY;
                var k3 = jd.rates.CZK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 14 && sl2 == 15) {
                var k2 = jd.rates.DKK;
                var k3 = jd.rates.CZK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 14 && sl2 == 16) {
                var k2 = jd.rates.HKD;
                var k3 = jd.rates.CZK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 14 && sl2 == 17) {
                var k2 = jd.rates.HRK;
                var k3 = jd.rates.CZK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 14 && sl2 == 18) {
                var k2 = jd.rates.HUF;
                var k3 = jd.rates.CZK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 14 && sl2 == 19) {
                var k2 = jd.rates.IDR;
                var k3 = jd.rates.CZK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 14 && sl2 == 20) {
                var k2 = jd.rates.ILS;
                var k3 = jd.rates.CZK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 14 && sl2 == 21) {
                var k2 = jd.rates.KRW;
                var k3 = jd.rates.CZK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl2 == 14 && sl2 == 22) {
                var k2 = jd.rates.MXN;
                var k3 = jd.rates.CZK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 14 && sl2 == 23) {
                var k2 = jd.rates.MYR;
                var k3 = jd.rates.CZK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 14 && sl2 == 24) {
                var k2 = jd.rates.NOK;
                var k3 = jd.rates.CZK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 14 && sl2 == 25) {
                var k2 = jd.rates.PHP;
                var k3 = jd.rates.CZK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 14 && sl2 == 26) {
                var k2 = jd.rates.PLN;
                var k3 = jd.rates.CZK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 14 && sl2 == 27) {
                var k2 = jd.rates.RON;
                var k3 = jd.rates.CZK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 14 && sl2 == 28) {
                var k2 = jd.rates.RUB;
                var k3 = jd.rates.CZK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 14 && sl2 == 29) {
                var k2 = jd.rates.SEK;
                var k3 = jd.rates.CZK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 14 && sl2 == 30) {
                var k2 = jd.rates.SGD;
                var k3 = jd.rates.CZK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 14 && sl2 == 31) {
                var k2 = jd.rates.THB;
                var k3 = jd.rates.CZK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 14 && sl2 == 32) {
                var k2 = jd.rates.TRY;
                var k3 = jd.rates.CZK;
                var k4 = (k2 / k3);
                calculate(k4);
            }

//*****************************************************************************************
            else if (sl1 ==  15 && sl2 == 1) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.DKK;
                var k4 = (k2 / k3);
                calculate(k4);
            }else if (sl1 == 15  && sl2 == 2) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.DKK;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
           
            else if (sl1 == 15 && sl2 == 3) {
                var k2 = jd.rates.EUR;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
            else if (sl1 == 15 && sl2 == 4) {
                var k2 = jd.rates.INR;
                var k3 = jd.rates.DKK;
                var k4 = (k2 / k3);
                calculate(k4);
            }  else if (sl1 == 15 && sl2 == 5) {
                var k2 = jd.rates.JPY;
                var k3 = jd.rates.DKK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 15 && sl2 == 6) {
                var k2 = jd.rates.NZD;
                var k3 = jd.rates.DKK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 15 && sl2 == 7) {
                var k2 = jd.rates.ZAR;
                var k3 = jd.rates.DKK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 15 && sl2 == 8) {
                var k2 = jd.rates.CHF;
                var k3 = jd.rates.DKK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 15 && sl2 == 9) {
                var k2 = jd.rates.GBP;
                var k3 = jd.rates.DKK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 15 && sl2 == 10) {
                var k2 = jd.rates.USD;
                var k3 = jd.rates.DKK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 15 && sl2 == 11) {
                var k2 = jd.rates.BGN;
                var k3 = jd.rates.DKK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 15 && sl2 == 12) {
                var k2 = jd.rates.BRL;
                var k3 = jd.rates.DKK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 15 && sl2 == 13) {
                var k2 = jd.rates.CNY;
                var k3 = jd.rates.DKK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 15 && sl2 == 14) {
                var k2 = jd.rates.CZK;
                var k3 = jd.rates.DKK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 15 && sl2 == 16) {
                var k2 = jd.rates.HKD;
                var k3 = jd.rates.DKK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 15 && sl2 == 17) {
                var k2 = jd.rates.HRK;
                var k3 = jd.rates.DKK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 15 && sl2 == 18) {
                var k2 = jd.rates.HUF;
                var k3 = jd.rates.DKK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 15 && sl2 == 19) {
                var k2 = jd.rates.IDR;
                var k3 = jd.rates.DKK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 15 && sl2 == 20) {
                var k2 = jd.rates.ILS;
                var k3 = jd.rates.DKK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 15 && sl2 == 21) {
                var k2 = jd.rates.KRW;
                var k3 = jd.rates.DKK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl2 == 15 && sl2 == 22) {
                var k2 = jd.rates.MXN;
                var k3 = jd.rates.DKK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 15 && sl2 == 23) {
                var k2 = jd.rates.MYR;
                var k3 = jd.rates.DKK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 15 && sl2 == 24) {
                var k2 = jd.rates.NOK;
                var k3 = jd.rates.DKK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 15 && sl2 == 25) {
                var k2 = jd.rates.PHP;
                var k3 = jd.rates.DKK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 15 && sl2 == 26) {
                var k2 = jd.rates.PLN;
                var k3 = jd.rates.DKK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 15 && sl2 == 27) {
                var k2 = jd.rates.RON;
                var k3 = jd.rates.DKK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 15 && sl2 == 28) {
                var k2 = jd.rates.RUB;
                var k3 = jd.rates.DKK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 15 && sl2 == 29) {
                var k2 = jd.rates.SEK;
                var k3 = jd.rates.DKK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 15 && sl2 == 30) {
                var k2 = jd.rates.SGD;
                var k3 = jd.rates.DKK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 15 && sl2 == 31) {
                var k2 = jd.rates.THB;
                var k3 = jd.rates.DKK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 15 && sl2 == 32) {
                var k2 = jd.rates.TRY;
                var k3 = jd.rates.DKK;
                var k4 = (k2 / k3);
                calculate(k4);
            }
//****************************************************************************************
            else if (sl1 ==  16 && sl2 == 1) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.HKD;
                var k4 = (k2 / k3);
                calculate(k4);
            }else if (sl1 == 16  && sl2 == 2) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.HKD;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
           
            else if (sl1 == 16 && sl2 == 3) {
                var k2 = jd.rates.EUR;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
            else if (sl1 == 16 && sl2 == 4) {
                var k2 = jd.rates.INR;
                var k3 = jd.rates.HKD;
                var k4 = (k2 / k3);
                calculate(k4);
            }  else if (sl1 == 16 && sl2 == 5) {
                var k2 = jd.rates.JPY;
                var k3 = jd.rates.HKD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 16 && sl2 == 6) {
                var k2 = jd.rates.NZD;
                var k3 = jd.rates.HKD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 16 && sl2 == 7) {
                var k2 = jd.rates.ZAR;
                var k3 = jd.rates.HKD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 16 && sl2 == 8) {
                var k2 = jd.rates.CHF;
                var k3 = jd.rates.HKD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 16 && sl2 == 9) {
                var k2 = jd.rates.GBP;
                var k3 = jd.rates.HKD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 16 && sl2 == 10) {
                var k2 = jd.rates.USD;
                var k3 = jd.rates.HKD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 16 && sl2 == 11) {
                var k2 = jd.rates.BGN;
                var k3 = jd.rates.HKD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 16 && sl2 == 12) {
                var k2 = jd.rates.BRL;
                var k3 = jd.rates.HKD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 16 && sl2 == 13) {
                var k2 = jd.rates.CNY;
                var k3 = jd.rates.HKD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 16 && sl2 == 14) {
                var k2 = jd.rates.CZK;
                var k3 = jd.rates.HKD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 16 && sl2 == 15) {
                var k2 = jd.rates.DKK;
                var k3 = jd.rates.HKD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 16 && sl2 == 17) {
                var k2 = jd.rates.HRK;
                var k3 = jd.rates.HKD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 16 && sl2 == 18) {
                var k2 = jd.rates.HUF;
                var k3 = jd.rates.HKD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 16 && sl2 == 19) {
                var k2 = jd.rates.IDR;
                var k3 = jd.rates.HKD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 16 && sl2 == 20) {
                var k2 = jd.rates.ILS;
                var k3 = jd.rates.HKD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 16 && sl2 == 21) {
                var k2 = jd.rates.KRW;
                var k3 = jd.rates.HKD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl2 == 16 && sl2 == 22) {
                var k2 = jd.rates.MXN;
                var k3 = jd.rates.HKD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 16 && sl2 == 23) {
                var k2 = jd.rates.MYR;
                var k3 = jd.rates.HKD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 16 && sl2 == 24) {
                var k2 = jd.rates.NOK;
                var k3 = jd.rates.HKD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 16 && sl2 == 25) {
                var k2 = jd.rates.PHP;
                var k3 = jd.rates.HKD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 16 && sl2 == 26) {
                var k2 = jd.rates.PLN;
                var k3 = jd.rates.HKD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 16 && sl2 == 27) {
                var k2 = jd.rates.RON;
                var k3 = jd.rates.HKD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 16 && sl2 == 28) {
                var k2 = jd.rates.RUB;
                var k3 = jd.rates.HKD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 16 && sl2 == 29) {
                var k2 = jd.rates.SEK;
                var k3 = jd.rates.HKD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 16 && sl2 == 30) {
                var k2 = jd.rates.SGD;
                var k3 = jd.rates.HKD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 16 && sl2 == 31) {
                var k2 = jd.rates.THB;
                var k3 = jd.rates.HKD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 16 && sl2 == 32) {
                var k2 = jd.rates.TRY;
                var k3 = jd.rates.HKD;
                var k4 = (k2 / k3);
                calculate(k4);
            }
//**********************************************************************************
            
            
            
            else if (sl1 ==  17 && sl2 == 1) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.HRK;
                var k4 = (k2 / k3);
                calculate(k4);
            }else if (sl1 == 17  && sl2 == 2) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.HRK;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
           
            else if (sl1 == 17 && sl2 == 3) {
                var k2 = jd.rates.EUR;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
            else if (sl1 == 17 && sl2 == 4) {
                var k2 = jd.rates.INR;
                var k3 = jd.rates.HRK;
                var k4 = (k2 / k3);
                calculate(k4);
            }  else if (sl1 == 17 && sl2 == 5) {
                var k2 = jd.rates.JPY;
                var k3 = jd.rates.HRK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 17 && sl2 == 6) {
                var k2 = jd.rates.NZD;
                var k3 = jd.rates.HRK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 17 && sl2 == 7) {
                var k2 = jd.rates.ZAR;
                var k3 = jd.rates.HRK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 17 && sl2 == 8) {
                var k2 = jd.rates.CHF;
                var k3 = jd.rates.HRK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 17 && sl2 == 9) {
                var k2 = jd.rates.GBP;
                var k3 = jd.rates.HRK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 17 && sl2 == 10) {
                var k2 = jd.rates.USD;
                var k3 = jd.rates.HRK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 17 && sl2 == 11) {
                var k2 = jd.rates.BGN;
                var k3 = jd.rates.HRK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 17 && sl2 == 12) {
                var k2 = jd.rates.BRL;
                var k3 = jd.rates.HRK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 17 && sl2 == 13) {
                var k2 = jd.rates.CNY;
                var k3 = jd.rates.HRK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 17 && sl2 == 14) {
                var k2 = jd.rates.CZK;
                var k3 = jd.rates.HRK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 17 && sl2 == 15) {
                var k2 = jd.rates.DKK;
                var k3 = jd.rates.HRK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 17 && sl2 == 16) {
                var k2 = jd.rates.HKD;
                var k3 = jd.rates.HRK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 17 && sl2 == 18) {
                var k2 = jd.rates.HUF;
                var k3 = jd.rates.HRK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 17 && sl2 == 19) {
                var k2 = jd.rates.IDR;
                var k3 = jd.rates.HRK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 17 && sl2 == 20) {
                var k2 = jd.rates.ILS;
                var k3 = jd.rates.HRK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 17 && sl2 == 21) {
                var k2 = jd.rates.KRW;
                var k3 = jd.rates.HRK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl2 == 17 && sl2 == 22) {
                var k2 = jd.rates.MXN;
                var k3 = jd.rates.HRK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 17 && sl2 == 23) {
                var k2 = jd.rates.MYR;
                var k3 = jd.rates.HRK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 17 && sl2 == 24) {
                var k2 = jd.rates.NOK;
                var k3 = jd.rates.HRK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 17 && sl2 == 25) {
                var k2 = jd.rates.PHP;
                var k3 = jd.rates.HRK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 17 && sl2 == 26) {
                var k2 = jd.rates.PLN;
                var k3 = jd.rates.HRK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 17 && sl2 == 27) {
                var k2 = jd.rates.RON;
                var k3 = jd.rates.HRK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 17 && sl2 == 28) {
                var k2 = jd.rates.RUB;
                var k3 = jd.rates.HRK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 17 && sl2 == 29) {
                var k2 = jd.rates.SEK;
                var k3 = jd.rates.HRK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 17 && sl2 == 30) {
                var k2 = jd.rates.SGD;
                var k3 = jd.rates.HRK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 17 && sl2 == 31) {
                var k2 = jd.rates.THB;
                var k3 = jd.rates.HRK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 17 && sl2 == 32) {
                var k2 = jd.rates.TRY;
                var k3 = jd.rates.HRK;
                var k4 = (k2 / k3);
                calculate(k4);
            }
//***************************************************************************************
            else if (sl1 ==  18 && sl2 == 1) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.HUF;
                var k4 = (k2 / k3);
                calculate(k4);
            }else if (sl1 == 18  && sl2 == 2) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.HUF;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
           
            else if (sl1 == 18 && sl2 == 3) {
                var k2 = jd.rates.EUR;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
            else if (sl1 == 18 && sl2 == 4) {
                var k2 = jd.rates.INR;
                var k3 = jd.rates.HUF;
                var k4 = (k2 / k3);
                calculate(k4);
            }  else if (sl1 == 18 && sl2 == 5) {
                var k2 = jd.rates.JPY;
                var k3 = jd.rates.HUF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 18 && sl2 == 6) {
                var k2 = jd.rates.NZD;
                var k3 = jd.rates.HUF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 18 && sl2 == 7) {
                var k2 = jd.rates.ZAR;
                var k3 = jd.rates.HUF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 18 && sl2 == 8) {
                var k2 = jd.rates.CHF;
                var k3 = jd.rates.HUF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 18 && sl2 == 9) {
                var k2 = jd.rates.GBP;
                var k3 = jd.rates.HUF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 18 && sl2 == 10) {
                var k2 = jd.rates.USD;
                var k3 = jd.rates.HUF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 18 && sl2 == 11) {
                var k2 = jd.rates.BGN;
                var k3 = jd.rates.HUF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 18 && sl2 == 12) {
                var k2 = jd.rates.BRL;
                var k3 = jd.rates.HUF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 18 && sl2 == 13) {
                var k2 = jd.rates.CNY;
                var k3 = jd.rates.HUF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 18 && sl2 == 14) {
                var k2 = jd.rates.CZK;
                var k3 = jd.rates.HUF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 18 && sl2 == 15) {
                var k2 = jd.rates.DKK;
                var k3 = jd.rates.HUF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 18 && sl2 == 16) {
                var k2 = jd.rates.HKD;
                var k3 = jd.rates.HUF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 18 && sl2 == 17) {
                var k2 = jd.rates.HRK;
                var k3 = jd.rates.HUF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 18 && sl2 == 19) {
                var k2 = jd.rates.IDR;
                var k3 = jd.rates.HUF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 18 && sl2 == 20) {
                var k2 = jd.rates.ILS;
                var k3 = jd.rates.HUF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 18 && sl2 == 21) {
                var k2 = jd.rates.KRW;
                var k3 = jd.rates.HUF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl2 == 18 && sl2 == 22) {
                var k2 = jd.rates.MXN;
                var k3 = jd.rates.HUF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 18 && sl2 == 23) {
                var k2 = jd.rates.MYR;
                var k3 = jd.rates.HUF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 18 && sl2 == 24) {
                var k2 = jd.rates.NOK;
                var k3 = jd.rates.HUF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 18 && sl2 == 25) {
                var k2 = jd.rates.PHP;
                var k3 = jd.rates.HUF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 18 && sl2 == 26) {
                var k2 = jd.rates.PLN;
                var k3 = jd.rates.HUF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 18 && sl2 == 27) {
                var k2 = jd.rates.RON;
                var k3 = jd.rates.HUF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 18 && sl2 == 28) {
                var k2 = jd.rates.RUB;
                var k3 = jd.rates.HUF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 18 && sl2 == 29) {
                var k2 = jd.rates.SEK;
                var k3 = jd.rates.HUF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 18 && sl2 == 30) {
                var k2 = jd.rates.SGD;
                var k3 = jd.rates.HUF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 18 && sl2 == 31) {
                var k2 = jd.rates.THB;
                var k3 = jd.rates.HUF;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 18 && sl2 == 32) {
                var k2 = jd.rates.TRY;
                var k3 = jd.rates.HUF;
                var k4 = (k2 / k3);
                calculate(k4);
            }

     //*******************************************************************************************
            else if (sl1 ==  19 && sl2 == 1) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.IDR;
                var k4 = (k2 / k3);
                calculate(k4);
            }else if (sl1 == 19  && sl2 == 2) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.IDR;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
           
            else if (sl1 == 19 && sl2 == 3) {
                var k2 = jd.rates.EUR;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
            else if (sl1 == 19 && sl2 == 4) {
                var k2 = jd.rates.INR;
                var k3 = jd.rates.IDR;
                var k4 = (k2 / k3);
                calculate(k4);
            }  else if (sl1 == 19 && sl2 == 5) {
                var k2 = jd.rates.JPY;
                var k3 = jd.rates.IDR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 19 && sl2 == 6) {
                var k2 = jd.rates.NZD;
                var k3 = jd.rates.IDR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 19 && sl2 == 7) {
                var k2 = jd.rates.ZAR;
                var k3 = jd.rates.IDR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 19 && sl2 == 8) {
                var k2 = jd.rates.CHF;
                var k3 = jd.rates.IDR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 19 && sl2 == 9) {
                var k2 = jd.rates.GBP;
                var k3 = jd.rates.IDR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 19 && sl2 == 10) {
                var k2 = jd.rates.USD;
                var k3 = jd.rates.IDR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 19 && sl2 == 11) {
                var k2 = jd.rates.BGN;
                var k3 = jd.rates.IDR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 19 && sl2 == 12) {
                var k2 = jd.rates.BRL;
                var k3 = jd.rates.IDR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 19 && sl2 == 13) {
                var k2 = jd.rates.CNY;
                var k3 = jd.rates.IDR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 19 && sl2 == 14) {
                var k2 = jd.rates.CZK;
                var k3 = jd.rates.IDR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 19 && sl2 == 15) {
                var k2 = jd.rates.DKK;
                var k3 = jd.rates.IDR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 19 && sl2 == 16) {
                var k2 = jd.rates.HKD;
                var k3 = jd.rates.IDR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 19 && sl2 == 17) {
                var k2 = jd.rates.HRK;
                var k3 = jd.rates.IDR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 19 && sl2 == 18) {
                var k2 = jd.rates.HUF;
                var k3 = jd.rates.IDR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 19 && sl2 == 20) {
                var k2 = jd.rates.ILS;
                var k3 = jd.rates.IDR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 19 && sl2 == 21) {
                var k2 = jd.rates.KRW;
                var k3 = jd.rates.IDR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl2 == 19 && sl2 == 22) {
                var k2 = jd.rates.MXN;
                var k3 = jd.rates.IDR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 19 && sl2 == 23) {
                var k2 = jd.rates.MYR;
                var k3 = jd.rates.IDR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 19 && sl2 == 24) {
                var k2 = jd.rates.NOK;
                var k3 = jd.rates.IDR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 19 && sl2 == 25) {
                var k2 = jd.rates.PHP;
                var k3 = jd.rates.IDR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 19 && sl2 == 26) {
                var k2 = jd.rates.PLN;
                var k3 = jd.rates.IDR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 19 && sl2 == 27) {
                var k2 = jd.rates.RON;
                var k3 = jd.rates.IDR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 19 && sl2 == 28) {
                var k2 = jd.rates.RUB;
                var k3 = jd.rates.IDR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 19 && sl2 == 29) {
                var k2 = jd.rates.SEK;
                var k3 = jd.rates.IDR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 19 && sl2 == 30) {
                var k2 = jd.rates.SGD;
                var k3 = jd.rates.IDR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 19 && sl2 == 31) {
                var k2 = jd.rates.THB;
                var k3 = jd.rates.IDR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 19 && sl2 == 32) {
                var k2 = jd.rates.TRY;
                var k3 = jd.rates.IDR;
                var k4 = (k2 / k3);
                calculate(k4);
            }
//***************************************************************************************************
            
            else if (sl1 ==  20 && sl2 == 1) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.ILS;
                var k4 = (k2 / k3);
                calculate(k4);
            }else if (sl1 == 20  && sl2 == 2) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.ILS;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
           
            else if (sl1 == 20 && sl2 == 3) {
                var k2 = jd.rates.EUR;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
            else if (sl1 == 20 && sl2 == 4) {
                var k2 = jd.rates.INR;
                var k3 = jd.rates.ILS;
                var k4 = (k2 / k3);
                calculate(k4);
            }  else if (sl1 == 20 && sl2 == 5) {
                var k2 = jd.rates.JPY;
                var k3 = jd.rates.ILS;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 20 && sl2 == 6) {
                var k2 = jd.rates.NZD;
                var k3 = jd.rates.ILS;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 20 && sl2 == 7) {
                var k2 = jd.rates.ZAR;
                var k3 = jd.rates.ILS;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 20 && sl2 == 8) {
                var k2 = jd.rates.CHF;
                var k3 = jd.rates.ILS;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 20 && sl2 == 9) {
                var k2 = jd.rates.GBP;
                var k3 = jd.rates.ILS;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 20 && sl2 == 10) {
                var k2 = jd.rates.USD;
                var k3 = jd.rates.ILS;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 20 && sl2 == 11) {
                var k2 = jd.rates.BGN;
                var k3 = jd.rates.ILS;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 20 && sl2 == 12) {
                var k2 = jd.rates.BRL;
                var k3 = jd.rates.ILS;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 20 && sl2 == 13) {
                var k2 = jd.rates.CNY;
                var k3 = jd.rates.ILS;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 20 && sl2 == 14) {
                var k2 = jd.rates.CZK;
                var k3 = jd.rates.ILS;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 20 && sl2 == 15) {
                var k2 = jd.rates.DKK;
                var k3 = jd.rates.ILS;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 20 && sl2 == 16) {
                var k2 = jd.rates.HKD;
                var k3 = jd.rates.ILS;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 20 && sl2 == 17) {
                var k2 = jd.rates.HRK;
                var k3 = jd.rates.ILS;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 20 && sl2 == 18) {
                var k2 = jd.rates.HUF;
                var k3 = jd.rates.ILS;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 20 && sl2 == 19) {
                var k2 = jd.rates.IDR;
                var k3 = jd.rates.ILS;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 20 && sl2 == 21) {
                var k2 = jd.rates.KRW;
                var k3 = jd.rates.ILS;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl2 == 20 && sl2 == 22) {
                var k2 = jd.rates.MXN;
                var k3 = jd.rates.ILS;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 20 && sl2 == 23) {
                var k2 = jd.rates.MYR;
                var k3 = jd.rates.ILS;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 20 && sl2 == 24) {
                var k2 = jd.rates.NOK;
                var k3 = jd.rates.ILS;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 20 && sl2 == 25) {
                var k2 = jd.rates.PHP;
                var k3 = jd.rates.ILS;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 20 && sl2 == 26) {
                var k2 = jd.rates.PLN;
                var k3 = jd.rates.ILS;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 20 && sl2 == 27) {
                var k2 = jd.rates.RON;
                var k3 = jd.rates.ILS;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 20 && sl2 == 28) {
                var k2 = jd.rates.RUB;
                var k3 = jd.rates.ILS;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 20 && sl2 == 29) {
                var k2 = jd.rates.SEK;
                var k3 = jd.rates.ILS;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 20 && sl2 == 30) {
                var k2 = jd.rates.SGD;
                var k3 = jd.rates.ILS;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 20 && sl2 == 31) {
                var k2 = jd.rates.THB;
                var k3 = jd.rates.ILS;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 20 && sl2 == 32) {
                var k2 = jd.rates.TRY;
                var k3 = jd.rates.ILS;
                var k4 = (k2 / k3);
                calculate(k4);
            }

            
   //************************************************************************************************
            else if (sl1 ==  21 && sl2 == 1) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.KRW;
                var k4 = (k2 / k3);
                calculate(k4);
            }else if (sl1 == 21  && sl2 == 2) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.KRW;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
           
            else if (sl1 == 21 && sl2 == 3) {
                var k2 = jd.rates.EUR;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
            else if (sl1 == 21 && sl2 == 4) {
                var k2 = jd.rates.INR;
                var k3 = jd.rates.KRW;
                var k4 = (k2 / k3);
                calculate(k4);
            }  else if (sl1 == 21 && sl2 == 5) {
                var k2 = jd.rates.JPY;
                var k3 = jd.rates.KRW;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 21 && sl2 == 6) {
                var k2 = jd.rates.NZD;
                var k3 = jd.rates.KRW;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 21 && sl2 == 7) {
                var k2 = jd.rates.ZAR;
                var k3 = jd.rates.KRW;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 21 && sl2 == 8) {
                var k2 = jd.rates.CHF;
                var k3 = jd.rates.KRW;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 21 && sl2 == 9) {
                var k2 = jd.rates.GBP;
                var k3 = jd.rates.KRW;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 21 && sl2 == 10) {
                var k2 = jd.rates.USD;
                var k3 = jd.rates.KRW;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 21 && sl2 == 11) {
                var k2 = jd.rates.BGN;
                var k3 = jd.rates.KRW;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 21 && sl2 == 12) {
                var k2 = jd.rates.BRL;
                var k3 = jd.rates.KRW;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 21 && sl2 == 13) {
                var k2 = jd.rates.CNY;
                var k3 = jd.rates.KRW;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 21 && sl2 == 14) {
                var k2 = jd.rates.CZK;
                var k3 = jd.rates.KRW;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 21 && sl2 == 15) {
                var k2 = jd.rates.DKK;
                var k3 = jd.rates.KRW;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 21 && sl2 == 16) {
                var k2 = jd.rates.HKD;
                var k3 = jd.rates.KRW;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 21 && sl2 == 17) {
                var k2 = jd.rates.HRK;
                var k3 = jd.rates.KRW;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 21 && sl2 == 18) {
                var k2 = jd.rates.HUF;
                var k3 = jd.rates.KRW;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 21 && sl2 == 19) {
                var k2 = jd.rates.IDR;
                var k3 = jd.rates.KRW;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 21 && sl2 == 20) {
                var k2 = jd.rates.ILS;
                var k3 = jd.rates.KRW;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 21 && sl2 == 22) {
                var k2 = jd.rates.MXN;
                var k3 = jd.rates.KRW;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 21 && sl2 == 23) {
                var k2 = jd.rates.MYR;
                var k3 = jd.rates.KRW;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 21 && sl2 == 24) {
                var k2 = jd.rates.NOK;
                var k3 = jd.rates.KRW;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 21 && sl2 == 25) {
                var k2 = jd.rates.PHP;
                var k3 = jd.rates.KRW;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 21 && sl2 == 26) {
                var k2 = jd.rates.PLN;
                var k3 = jd.rates.KRW;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 21 && sl2 == 27) {
                var k2 = jd.rates.RON;
                var k3 = jd.rates.KRW;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 21 && sl2 == 28) {
                var k2 = jd.rates.RUB;
                var k3 = jd.rates.KRW;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 21 && sl2 == 29) {
                var k2 = jd.rates.SEK;
                var k3 = jd.rates.KRW;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 21 && sl2 == 30) {
                var k2 = jd.rates.SGD;
                var k3 = jd.rates.KRW;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 21 && sl2 == 31) {
                var k2 = jd.rates.THB;
                var k3 = jd.rates.KRW;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 21 && sl2 == 32) {
                var k2 = jd.rates.TRY;
                var k3 = jd.rates.KRW;
                var k4 = (k2 / k3);
                calculate(k4);
            }
//******************************************************************************************************
            
            
            else if (sl1 ==  22 && sl2 == 1) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.MXN;
                var k4 = (k2 / k3);
                calculate(k4);
            }else if (sl1 == 22  && sl2 == 2) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.MXN;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
           
            else if (sl1 == 22 && sl2 == 3) {
                var k2 = jd.rates.EUR;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
            else if (sl1 == 22 && sl2 == 4) {
                var k2 = jd.rates.INR;
                var k3 = jd.rates.MXN;
                var k4 = (k2 / k3);
                calculate(k4);
            }  else if (sl1 == 22 && sl2 == 5) {
                var k2 = jd.rates.JPY;
                var k3 = jd.rates.MXN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 22 && sl2 == 6) {
                var k2 = jd.rates.NZD;
                var k3 = jd.rates.MXN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 22 && sl2 == 7) {
                var k2 = jd.rates.ZAR;
                var k3 = jd.rates.MXN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 22 && sl2 == 8) {
                var k2 = jd.rates.CHF;
                var k3 = jd.rates.MXN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 22 && sl2 == 9) {
                var k2 = jd.rates.GBP;
                var k3 = jd.rates.MXN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 22 && sl2 == 10) {
                var k2 = jd.rates.USD;
                var k3 = jd.rates.MXN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 22 && sl2 == 11) {
                var k2 = jd.rates.BGN;
                var k3 = jd.rates.MXN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 22 && sl2 == 12) {
                var k2 = jd.rates.BRL;
                var k3 = jd.rates.MXN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 22 && sl2 == 13) {
                var k2 = jd.rates.CNY;
                var k3 = jd.rates.MXN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 22 && sl2 == 14) {
                var k2 = jd.rates.CZK;
                var k3 = jd.rates.MXN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 22 && sl2 == 15) {
                var k2 = jd.rates.DKK;
                var k3 = jd.rates.MXN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 22 && sl2 == 16) {
                var k2 = jd.rates.HKD;
                var k3 = jd.rates.MXN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 22 && sl2 == 17) {
                var k2 = jd.rates.HRK;
                var k3 = jd.rates.MXN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 22 && sl2 == 18) {
                var k2 = jd.rates.HUF;
                var k3 = jd.rates.MXN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 22 && sl2 == 19) {
                var k2 = jd.rates.IDR;
                var k3 = jd.rates.MXN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 22 && sl2 == 20) {
                var k2 = jd.rates.ILS;
                var k3 = jd.rates.MXN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 22 && sl2 == 21) {
                var k2 = jd.rates.KRW;
                var k3 = jd.rates.MXN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 22 && sl2 == 23) {
                var k2 = jd.rates.MYR;
                var k3 = jd.rates.MXN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 22 && sl2 == 24) {
                var k2 = jd.rates.NOK;
                var k3 = jd.rates.MXN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 22 && sl2 == 25) {
                var k2 = jd.rates.PHP;
                var k3 = jd.rates.MXN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 22 && sl2 == 26) {
                var k2 = jd.rates.PLN;
                var k3 = jd.rates.MXN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 22 && sl2 == 27) {
                var k2 = jd.rates.RON;
                var k3 = jd.rates.MXN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 22 && sl2 == 28) {
                var k2 = jd.rates.RUB;
                var k3 = jd.rates.MXN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 22 && sl2 == 29) {
                var k2 = jd.rates.SEK;
                var k3 = jd.rates.MXN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 22 && sl2 == 30) {
                var k2 = jd.rates.SGD;
                var k3 = jd.rates.MXN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 22 && sl2 == 31) {
                var k2 = jd.rates.THB;
                var k3 = jd.rates.MXN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 22 && sl2 == 32) {
                var k2 = jd.rates.TRY;
                var k3 = jd.rates.MXN;
                var k4 = (k2 / k3);
                calculate(k4);
            }

//******************************************************************************************
            
            else if (sl1 ==  23 && sl2 == 1) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.MYR;
                var k4 = (k2 / k3);
                calculate(k4);
            }else if (sl1 == 23  && sl2 == 2) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.MYR;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
           
            else if (sl1 == 23 && sl2 == 3) {
                var k2 = jd.rates.EUR;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
            else if (sl1 == 23 && sl2 == 4) {
                var k2 = jd.rates.INR;
                var k3 = jd.rates.MYR;
                var k4 = (k2 / k3);
                calculate(k4);
            }  else if (sl1 == 23 && sl2 == 5) {
                var k2 = jd.rates.JPY;
                var k3 = jd.rates.MYR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 23 && sl2 == 6) {
                var k2 = jd.rates.NZD;
                var k3 = jd.rates.MYR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 23 && sl2 == 7) {
                var k2 = jd.rates.ZAR;
                var k3 = jd.rates.MYR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 23 && sl2 == 8) {
                var k2 = jd.rates.CHF;
                var k3 = jd.rates.MYR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 23 && sl2 == 9) {
                var k2 = jd.rates.GBP;
                var k3 = jd.rates.MYR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 23 && sl2 == 10) {
                var k2 = jd.rates.USD;
                var k3 = jd.rates.MYR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 23 && sl2 == 11) {
                var k2 = jd.rates.BGN;
                var k3 = jd.rates.MYR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 23 && sl2 == 12) {
                var k2 = jd.rates.BRL;
                var k3 = jd.rates.MYR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 23 && sl2 == 13) {
                var k2 = jd.rates.CNY;
                var k3 = jd.rates.MYR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 23 && sl2 == 14) {
                var k2 = jd.rates.CZK;
                var k3 = jd.rates.MYR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 23 && sl2 == 15) {
                var k2 = jd.rates.DKK;
                var k3 = jd.rates.MYR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 23 && sl2 == 16) {
                var k2 = jd.rates.HKD;
                var k3 = jd.rates.MYR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 23 && sl2 == 17) {
                var k2 = jd.rates.HRK;
                var k3 = jd.rates.MYR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 23 && sl2 == 18) {
                var k2 = jd.rates.HUF;
                var k3 = jd.rates.MYR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 23 && sl2 == 19) {
                var k2 = jd.rates.IDR;
                var k3 = jd.rates.MYR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 23 && sl2 == 20) {
                var k2 = jd.rates.ILS;
                var k3 = jd.rates.MYR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 23 && sl2 == 21) {
                var k2 = jd.rates.KRW;
                var k3 = jd.rates.MYR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 23 && sl2 == 22) {
                var k2 = jd.rates.MXN;
                var k3 = jd.rates.MYR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 23 && sl2 == 24) {
                var k2 = jd.rates.NOK;
                var k3 = jd.rates.MYR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 23 && sl2 == 25) {
                var k2 = jd.rates.PHP;
                var k3 = jd.rates.MYR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 23 && sl2 == 26) {
                var k2 = jd.rates.PLN;
                var k3 = jd.rates.MYR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 23 && sl2 == 27) {
                var k2 = jd.rates.RON;
                var k3 = jd.rates.MYR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 23 && sl2 == 28) {
                var k2 = jd.rates.RUB;
                var k3 = jd.rates.MYR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 23 && sl2 == 29) {
                var k2 = jd.rates.SEK;
                var k3 = jd.rates.MYR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 23 && sl2 == 30) {
                var k2 = jd.rates.SGD;
                var k3 = jd.rates.MYR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 23 && sl2 == 31) {
                var k2 = jd.rates.THB;
                var k3 = jd.rates.MYR;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 23 && sl2 == 32) {
                var k2 = jd.rates.TRY;
                var k3 = jd.rates.MYR;
                var k4 = (k2 / k3);
                calculate(k4);
            }

            
            
//**********************************************************************************************8
            
            else if (sl1 ==  24 && sl2 == 1) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.NOK;
                var k4 = (k2 / k3);
                calculate(k4);
            }else if (sl1 == 24  && sl2 == 2) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.NOK;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
           
            else if (sl1 == 24 && sl2 == 3) {
                var k2 = jd.rates.EUR;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
            else if (sl1 == 24 && sl2 == 4) {
                var k2 = jd.rates.INR;
                var k3 = jd.rates.NOK;
                var k4 = (k2 / k3);
                calculate(k4);
            }  else if (sl1 == 24 && sl2 == 5) {
                var k2 = jd.rates.JPY;
                var k3 = jd.rates.NOK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 24 && sl2 == 6) {
                var k2 = jd.rates.NZD;
                var k3 = jd.rates.NOK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 24 && sl2 == 7) {
                var k2 = jd.rates.ZAR;
                var k3 = jd.rates.NOK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 24 && sl2 == 8) {
                var k2 = jd.rates.CHF;
                var k3 = jd.rates.NOK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 24 && sl2 == 9) {
                var k2 = jd.rates.GBP;
                var k3 = jd.rates.NOK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 24 && sl2 == 10) {
                var k2 = jd.rates.USD;
                var k3 = jd.rates.NOK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 24 && sl2 == 11) {
                var k2 = jd.rates.BGN;
                var k3 = jd.rates.NOK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 24 && sl2 == 12) {
                var k2 = jd.rates.BRL;
                var k3 = jd.rates.NOK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 24 && sl2 == 13) {
                var k2 = jd.rates.CNY;
                var k3 = jd.rates.NOK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 24 && sl2 == 14) {
                var k2 = jd.rates.CZK;
                var k3 = jd.rates.NOK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 24 && sl2 == 15) {
                var k2 = jd.rates.DKK;
                var k3 = jd.rates.NOK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 24 && sl2 == 16) {
                var k2 = jd.rates.HKD;
                var k3 = jd.rates.NOK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 24 && sl2 == 17) {
                var k2 = jd.rates.HRK;
                var k3 = jd.rates.NOK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 24 && sl2 == 18) {
                var k2 = jd.rates.HUF;
                var k3 = jd.rates.NOK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 24 && sl2 == 19) {
                var k2 = jd.rates.IDR;
                var k3 = jd.rates.NOK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 24 && sl2 == 20) {
                var k2 = jd.rates.ILS;
                var k3 = jd.rates.NOK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 24 && sl2 == 21) {
                var k2 = jd.rates.KRW;
                var k3 = jd.rates.NOK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 24 && sl2 == 22) {
                var k2 = jd.rates.MXN;
                var k3 = jd.rates.NOK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 24 && sl2 == 23) {
                var k2 = jd.rates.MYR;
                var k3 = jd.rates.NOK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 24 && sl2 == 25) {
                var k2 = jd.rates.PHP;
                var k3 = jd.rates.NOK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 24 && sl2 == 26) {
                var k2 = jd.rates.PLN;
                var k3 = jd.rates.NOK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 24 && sl2 == 27) {
                var k2 = jd.rates.RON;
                var k3 = jd.rates.NOK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 24 && sl2 == 28) {
                var k2 = jd.rates.RUB;
                var k3 = jd.rates.NOK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 24 && sl2 == 29) {
                var k2 = jd.rates.SEK;
                var k3 = jd.rates.NOK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 24 && sl2 == 30) {
                var k2 = jd.rates.SGD;
                var k3 = jd.rates.NOK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 24 && sl2 == 31) {
                var k2 = jd.rates.THB;
                var k3 = jd.rates.NOK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 24 && sl2 == 32) {
                var k2 = jd.rates.TRY;
                var k3 = jd.rates.NOK;
                var k4 = (k2 / k3);
                calculate(k4);
            }

   //***************************************************************************************
            else if (sl1 ==  25 && sl2 == 1) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.PHP;
                var k4 = (k2 / k3);
                calculate(k4);
            }else if (sl1 == 25  && sl2 == 2) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.PHP;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
           
            else if (sl1 == 25 && sl2 == 3) {
                var k2 = jd.rates.EUR;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
            else if (sl1 == 25 && sl2 == 4) {
                var k2 = jd.rates.INR;
                var k3 = jd.rates.PHP;
                var k4 = (k2 / k3);
                calculate(k4);
            }  else if (sl1 == 25 && sl2 == 5) {
                var k2 = jd.rates.JPY;
                var k3 = jd.rates.PHP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 25 && sl2 == 6) {
                var k2 = jd.rates.NZD;
                var k3 = jd.rates.PHP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 25 && sl2 == 7) {
                var k2 = jd.rates.ZAR;
                var k3 = jd.rates.PHP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 25 && sl2 == 8) {
                var k2 = jd.rates.CHF;
                var k3 = jd.rates.PHP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 25 && sl2 == 9) {
                var k2 = jd.rates.GBP;
                var k3 = jd.rates.PHP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 25 && sl2 == 10) {
                var k2 = jd.rates.USD;
                var k3 = jd.rates.PHP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 25 && sl2 == 11) {
                var k2 = jd.rates.BGN;
                var k3 = jd.rates.PHP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 25 && sl2 == 12) {
                var k2 = jd.rates.BRL;
                var k3 = jd.rates.PHP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 25 && sl2 == 13) {
                var k2 = jd.rates.CNY;
                var k3 = jd.rates.PHP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 25 && sl2 == 14) {
                var k2 = jd.rates.CZK;
                var k3 = jd.rates.PHP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 25 && sl2 == 15) {
                var k2 = jd.rates.DKK;
                var k3 = jd.rates.PHP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 25 && sl2 == 16) {
                var k2 = jd.rates.HKD;
                var k3 = jd.rates.PHP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 25 && sl2 == 17) {
                var k2 = jd.rates.HRK;
                var k3 = jd.rates.PHP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 25 && sl2 == 18) {
                var k2 = jd.rates.HUF;
                var k3 = jd.rates.PHP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 25 && sl2 == 19) {
                var k2 = jd.rates.IDR;
                var k3 = jd.rates.PHP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 25 && sl2 == 20) {
                var k2 = jd.rates.ILS;
                var k3 = jd.rates.PHP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 25 && sl2 == 21) {
                var k2 = jd.rates.KRW;
                var k3 = jd.rates.PHP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 25 && sl2 == 22) {
                var k2 = jd.rates.MXN;
                var k3 = jd.rates.PHP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 25 && sl2 == 23) {
                var k2 = jd.rates.MYR;
                var k3 = jd.rates.PHP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 25 && sl2 == 24) {
                var k2 = jd.rates.NOK;
                var k3 = jd.rates.PHP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 25 && sl2 == 26) {
                var k2 = jd.rates.PLN;
                var k3 = jd.rates.PHP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 25 && sl2 == 27) {
                var k2 = jd.rates.RON;
                var k3 = jd.rates.PHP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 25 && sl2 == 28) {
                var k2 = jd.rates.RUB;
                var k3 = jd.rates.PHP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 25 && sl2 == 29) {
                var k2 = jd.rates.SEK;
                var k3 = jd.rates.PHP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 25 && sl2 == 30) {
                var k2 = jd.rates.SGD;
                var k3 = jd.rates.PHP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 25 && sl2 == 31) {
                var k2 = jd.rates.THB;
                var k3 = jd.rates.PHP;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 25 && sl2 == 32) {
                var k2 = jd.rates.TRY;
                var k3 = jd.rates.PHP;
                var k4 = (k2 / k3);
                calculate(k4);
            }

//******************************************************************************************
            
            else if (sl1 ==  26 && sl2 == 1) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.PLN;
                var k4 = (k2 / k3);
                calculate(k4);
            }else if (sl1 == 26  && sl2 == 2) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.PLN;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
           
            else if (sl1 == 26 && sl2 == 3) {
                var k2 = jd.rates.EUR;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
            else if (sl1 == 26 && sl2 == 4) {
                var k2 = jd.rates.INR;
                var k3 = jd.rates.PLN;
                var k4 = (k2 / k3);
                calculate(k4);
            }  else if (sl1 == 26 && sl2 == 5) {
                var k2 = jd.rates.JPY;
                var k3 = jd.rates.PLN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 26 && sl2 == 6) {
                var k2 = jd.rates.NZD;
                var k3 = jd.rates.PLN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 26 && sl2 == 7) {
                var k2 = jd.rates.ZAR;
                var k3 = jd.rates.PLN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 26 && sl2 == 8) {
                var k2 = jd.rates.CHF;
                var k3 = jd.rates.PLN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 26 && sl2 == 9) {
                var k2 = jd.rates.GBP;
                var k3 = jd.rates.PLN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 26 && sl2 == 10) {
                var k2 = jd.rates.USD;
                var k3 = jd.rates.PLN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 26 && sl2 == 11) {
                var k2 = jd.rates.BGN;
                var k3 = jd.rates.PLN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 26 && sl2 == 12) {
                var k2 = jd.rates.BRL;
                var k3 = jd.rates.PLN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 26 && sl2 == 13) {
                var k2 = jd.rates.CNY;
                var k3 = jd.rates.PLN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 26 && sl2 == 14) {
                var k2 = jd.rates.CZK;
                var k3 = jd.rates.PLN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 26 && sl2 == 15) {
                var k2 = jd.rates.DKK;
                var k3 = jd.rates.PLN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 26 && sl2 == 16) {
                var k2 = jd.rates.HKD;
                var k3 = jd.rates.PLN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 26 && sl2 == 17) {
                var k2 = jd.rates.HRK;
                var k3 = jd.rates.PLN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 26 && sl2 == 18) {
                var k2 = jd.rates.HUF;
                var k3 = jd.rates.PLN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 26 && sl2 == 19) {
                var k2 = jd.rates.IDR;
                var k3 = jd.rates.PLN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 26 && sl2 == 20) {
                var k2 = jd.rates.ILS;
                var k3 = jd.rates.PLN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 26 && sl2 == 21) {
                var k2 = jd.rates.KRW;
                var k3 = jd.rates.PLN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 26 && sl2 == 22) {
                var k2 = jd.rates.MXN;
                var k3 = jd.rates.PLN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 26 && sl2 == 23) {
                var k2 = jd.rates.MYR;
                var k3 = jd.rates.PLN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 26 && sl2 == 24) {
                var k2 = jd.rates.NOK;
                var k3 = jd.rates.PLN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 26 && sl2 == 25) {
                var k2 = jd.rates.PHP;
                var k3 = jd.rates.PLN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 26 && sl2 == 27) {
                var k2 = jd.rates.RON;
                var k3 = jd.rates.PLN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 26 && sl2 == 28) {
                var k2 = jd.rates.RUB;
                var k3 = jd.rates.PLN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 26 && sl2 == 29) {
                var k2 = jd.rates.SEK;
                var k3 = jd.rates.PLN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 26 && sl2 == 30) {
                var k2 = jd.rates.SGD;
                var k3 = jd.rates.PLN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 26 && sl2 == 31) {
                var k2 = jd.rates.THB;
                var k3 = jd.rates.PLN;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 26 && sl2 == 32) {
                var k2 = jd.rates.TRY;
                var k3 = jd.rates.PLN;
                var k4 = (k2 / k3);
                calculate(k4);
            }

    //*********************************************************************************
            
            else if (sl1 ==  27 && sl2 == 1) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.RON;
                var k4 = (k2 / k3);
                calculate(k4);
            }else if (sl1 == 27  && sl2 == 2) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.RON;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
           
            else if (sl1 == 27 && sl2 == 3) {
                var k2 = jd.rates.EUR;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
            else if (sl1 == 27 && sl2 == 4) {
                var k2 = jd.rates.INR;
                var k3 = jd.rates.RON;
                var k4 = (k2 / k3);
                calculate(k4);
            }  else if (sl1 == 27 && sl2 == 5) {
                var k2 = jd.rates.JPY;
                var k3 = jd.rates.RON;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 27 && sl2 == 6) {
                var k2 = jd.rates.NZD;
                var k3 = jd.rates.RON;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 27 && sl2 == 7) {
                var k2 = jd.rates.ZAR;
                var k3 = jd.rates.RON;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 27 && sl2 == 8) {
                var k2 = jd.rates.CHF;
                var k3 = jd.rates.RON;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 27 && sl2 == 9) {
                var k2 = jd.rates.GBP;
                var k3 = jd.rates.RON;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 27 && sl2 == 10) {
                var k2 = jd.rates.USD;
                var k3 = jd.rates.RON;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 27 && sl2 == 11) {
                var k2 = jd.rates.BGN;
                var k3 = jd.rates.RON;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 27 && sl2 == 12) {
                var k2 = jd.rates.BRL;
                var k3 = jd.rates.RON;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 27 && sl2 == 13) {
                var k2 = jd.rates.CNY;
                var k3 = jd.rates.RON;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 27 && sl2 == 14) {
                var k2 = jd.rates.CZK;
                var k3 = jd.rates.RON;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 27 && sl2 == 15) {
                var k2 = jd.rates.DKK;
                var k3 = jd.rates.RON;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 27 && sl2 == 16) {
                var k2 = jd.rates.HKD;
                var k3 = jd.rates.RON;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 27 && sl2 == 17) {
                var k2 = jd.rates.HRK;
                var k3 = jd.rates.RON;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 27 && sl2 == 18) {
                var k2 = jd.rates.HUF;
                var k3 = jd.rates.RON;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 27 && sl2 == 19) {
                var k2 = jd.rates.IDR;
                var k3 = jd.rates.RON;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 27 && sl2 == 20) {
                var k2 = jd.rates.ILS;
                var k3 = jd.rates.RON;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 27 && sl2 == 21) {
                var k2 = jd.rates.KRW;
                var k3 = jd.rates.RON;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 27 && sl2 == 22) {
                var k2 = jd.rates.MXN;
                var k3 = jd.rates.RON;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 27 && sl2 == 23) {
                var k2 = jd.rates.MYR;
                var k3 = jd.rates.RON;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 27 && sl2 == 24) {
                var k2 = jd.rates.NOK;
                var k3 = jd.rates.RON;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 27 && sl2 == 25) {
                var k2 = jd.rates.PHP;
                var k3 = jd.rates.RON;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 27 && sl2 == 26) {
                var k2 = jd.rates.PLN;
                var k3 = jd.rates.RON;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 27 && sl2 == 28) {
                var k2 = jd.rates.RUB;
                var k3 = jd.rates.RON;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 27 && sl2 == 29) {
                var k2 = jd.rates.SEK;
                var k3 = jd.rates.RON;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 27 && sl2 == 30) {
                var k2 = jd.rates.SGD;
                var k3 = jd.rates.RON;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 27 && sl2 == 31) {
                var k2 = jd.rates.THB;
                var k3 = jd.rates.RON;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 27 && sl2 == 32) {
                var k2 = jd.rates.TRY;
                var k3 = jd.rates.RON;
                var k4 = (k2 / k3);
                calculate(k4);
            }

            
//****************************************************************************************
            
            else if (sl1 ==  28 && sl2 == 1) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.RUB;
                var k4 = (k2 / k3);
                calculate(k4);
            }else if (sl1 == 28  && sl2 == 2) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.RUB;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
           
            else if (sl1 == 28 && sl2 == 3) {
                var k2 = jd.rates.EUR;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
            else if (sl1 == 28 && sl2 == 4) {
                var k2 = jd.rates.INR;
                var k3 = jd.rates.RUB;
                var k4 = (k2 / k3);
                calculate(k4);
            }  else if (sl1 == 28 && sl2 == 5) {
                var k2 = jd.rates.JPY;
                var k3 = jd.rates.RUB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 28 && sl2 == 6) {
                var k2 = jd.rates.NZD;
                var k3 = jd.rates.RUB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 28 && sl2 == 7) {
                var k2 = jd.rates.ZAR;
                var k3 = jd.rates.RUB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 28 && sl2 == 8) {
                var k2 = jd.rates.CHF;
                var k3 = jd.rates.RUB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 28 && sl2 == 9) {
                var k2 = jd.rates.GBP;
                var k3 = jd.rates.RUB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 28 && sl2 == 10) {
                var k2 = jd.rates.USD;
                var k3 = jd.rates.RUB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 28 && sl2 == 11) {
                var k2 = jd.rates.BGN;
                var k3 = jd.rates.RUB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 28 && sl2 == 12) {
                var k2 = jd.rates.BRL;
                var k3 = jd.rates.RUB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 28 && sl2 == 13) {
                var k2 = jd.rates.CNY;
                var k3 = jd.rates.RUB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 28 && sl2 == 14) {
                var k2 = jd.rates.CZK;
                var k3 = jd.rates.RUB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 28 && sl2 == 15) {
                var k2 = jd.rates.DKK;
                var k3 = jd.rates.RUB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 28 && sl2 == 16) {
                var k2 = jd.rates.HKD;
                var k3 = jd.rates.RUB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 28 && sl2 == 17) {
                var k2 = jd.rates.HRK;
                var k3 = jd.rates.RUB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 28 && sl2 == 18) {
                var k2 = jd.rates.HUF;
                var k3 = jd.rates.RUB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 28 && sl2 == 19) {
                var k2 = jd.rates.IDR;
                var k3 = jd.rates.RUB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 28 && sl2 == 20) {
                var k2 = jd.rates.ILS;
                var k3 = jd.rates.RUB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 28 && sl2 == 21) {
                var k2 = jd.rates.KRW;
                var k3 = jd.rates.RUB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 28 && sl2 == 22) {
                var k2 = jd.rates.MXN;
                var k3 = jd.rates.RUB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 28 && sl2 == 23) {
                var k2 = jd.rates.MYR;
                var k3 = jd.rates.RUB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 28 && sl2 == 24) {
                var k2 = jd.rates.NOK;
                var k3 = jd.rates.RUB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 28 && sl2 == 25) {
                var k2 = jd.rates.PHP;
                var k3 = jd.rates.RUB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 28 && sl2 == 26) {
                var k2 = jd.rates.PLN;
                var k3 = jd.rates.RUB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 28 && sl2 == 27) {
                var k2 = jd.rates.RON;
                var k3 = jd.rates.RUB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 28 && sl2 == 29) {
                var k2 = jd.rates.SEK;
                var k3 = jd.rates.RUB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 28 && sl2 == 30) {
                var k2 = jd.rates.SGD;
                var k3 = jd.rates.RUB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 28 && sl2 == 31) {
                var k2 = jd.rates.THB;
                var k3 = jd.rates.RUB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 28 && sl2 == 32) {
                var k2 = jd.rates.TRY;
                var k3 = jd.rates.RUB;
                var k4 = (k2 / k3);
                calculate(k4);
            }
//*****************************************************************************************************
            
            else if (sl1 ==  29 && sl2 == 1) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.SEK;
                var k4 = (k2 / k3);
                calculate(k4);
            }else if (sl1 == 29  && sl2 == 2) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.SEK;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
           
            else if (sl1 == 29 && sl2 == 3) {
                var k2 = jd.rates.EUR;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
            else if (sl1 == 29 && sl2 == 4) {
                var k2 = jd.rates.INR;
                var k3 = jd.rates.SEK;
                var k4 = (k2 / k3);
                calculate(k4);
            }  else if (sl1 == 29 && sl2 == 5) {
                var k2 = jd.rates.JPY;
                var k3 = jd.rates.SEK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 29 && sl2 == 6) {
                var k2 = jd.rates.NZD;
                var k3 = jd.rates.SEK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 29 && sl2 == 7) {
                var k2 = jd.rates.ZAR;
                var k3 = jd.rates.SEK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 29 && sl2 == 8) {
                var k2 = jd.rates.CHF;
                var k3 = jd.rates.SEK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 29 && sl2 == 9) {
                var k2 = jd.rates.GBP;
                var k3 = jd.rates.SEK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 29 && sl2 == 10) {
                var k2 = jd.rates.USD;
                var k3 = jd.rates.SEK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 29 && sl2 == 11) {
                var k2 = jd.rates.BGN;
                var k3 = jd.rates.SEK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 29 && sl2 == 12) {
                var k2 = jd.rates.BRL;
                var k3 = jd.rates.SEK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 29 && sl2 == 13) {
                var k2 = jd.rates.CNY;
                var k3 = jd.rates.SEK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 29 && sl2 == 14) {
                var k2 = jd.rates.CZK;
                var k3 = jd.rates.SEK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 29 && sl2 == 15) {
                var k2 = jd.rates.DKK;
                var k3 = jd.rates.SEK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 29 && sl2 == 16) {
                var k2 = jd.rates.HKD;
                var k3 = jd.rates.SEK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 29 && sl2 == 17) {
                var k2 = jd.rates.HRK;
                var k3 = jd.rates.SEK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 29 && sl2 == 18) {
                var k2 = jd.rates.HUF;
                var k3 = jd.rates.SEK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 29 && sl2 == 19) {
                var k2 = jd.rates.IDR;
                var k3 = jd.rates.SEK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 29 && sl2 == 20) {
                var k2 = jd.rates.ILS;
                var k3 = jd.rates.SEK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 29 && sl2 == 21) {
                var k2 = jd.rates.KRW;
                var k3 = jd.rates.SEK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 29 && sl2 == 22) {
                var k2 = jd.rates.MXN;
                var k3 = jd.rates.SEK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 29 && sl2 == 23) {
                var k2 = jd.rates.MYR;
                var k3 = jd.rates.SEK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 29 && sl2 == 24) {
                var k2 = jd.rates.NOK;
                var k3 = jd.rates.SEK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 29 && sl2 == 25) {
                var k2 = jd.rates.PHP;
                var k3 = jd.rates.SEK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 29 && sl2 == 26) {
                var k2 = jd.rates.PLN;
                var k3 = jd.rates.SEK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 29 && sl2 == 27) {
                var k2 = jd.rates.RON;
                var k3 = jd.rates.SEK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 29 && sl2 == 28) {
                var k2 = jd.rates.RUB;
                var k3 = jd.rates.SEK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 29 && sl2 == 30) {
                var k2 = jd.rates.SGD;
                var k3 = jd.rates.SEK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 29 && sl2 == 31) {
                var k2 = jd.rates.THB;
                var k3 = jd.rates.SEK;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 29 && sl2 == 32) {
                var k2 = jd.rates.TRY;
                var k3 = jd.rates.SEK;
                var k4 = (k2 / k3);
                calculate(k4);
            }

//********************************************************************************************
            
            else if (sl1 ==  30 && sl2 == 1) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.SGD;
                var k4 = (k2 / k3);
                calculate(k4);
            }else if (sl1 == 30  && sl2 == 2) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.SGD;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
           
            else if (sl1 == 30 && sl2 == 3) {
                var k2 = jd.rates.EUR;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
            else if (sl1 == 30 && sl2 == 4) {
                var k2 = jd.rates.INR;
                var k3 = jd.rates.SGD;
                var k4 = (k2 / k3);
                calculate(k4);
            }  else if (sl1 == 30 && sl2 == 5) {
                var k2 = jd.rates.JPY;
                var k3 = jd.rates.SGD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 30 && sl2 == 6) {
                var k2 = jd.rates.NZD;
                var k3 = jd.rates.SGD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 30 && sl2 == 7) {
                var k2 = jd.rates.ZAR;
                var k3 = jd.rates.SGD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 30 && sl2 == 8) {
                var k2 = jd.rates.CHF;
                var k3 = jd.rates.SGD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 30 && sl2 == 9) {
                var k2 = jd.rates.GBP;
                var k3 = jd.rates.SGD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 30 && sl2 == 10) {
                var k2 = jd.rates.USD;
                var k3 = jd.rates.SGD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 30 && sl2 == 11) {
                var k2 = jd.rates.BGN;
                var k3 = jd.rates.SGD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 30 && sl2 == 12) {
                var k2 = jd.rates.BRL;
                var k3 = jd.rates.SGD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 30 && sl2 == 13) {
                var k2 = jd.rates.CNY;
                var k3 = jd.rates.SGD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 30 && sl2 == 14) {
                var k2 = jd.rates.CZK;
                var k3 = jd.rates.SGD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 30 && sl2 == 15) {
                var k2 = jd.rates.DKK;
                var k3 = jd.rates.SGD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 30 && sl2 == 16) {
                var k2 = jd.rates.HKD;
                var k3 = jd.rates.SGD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 30 && sl2 == 17) {
                var k2 = jd.rates.HRK;
                var k3 = jd.rates.SGD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 30 && sl2 == 18) {
                var k2 = jd.rates.HUF;
                var k3 = jd.rates.SGD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 30 && sl2 == 19) {
                var k2 = jd.rates.IDR;
                var k3 = jd.rates.SGD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 30 && sl2 == 20) {
                var k2 = jd.rates.ILS;
                var k3 = jd.rates.SGD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 30 && sl2 == 21) {
                var k2 = jd.rates.KRW;
                var k3 = jd.rates.SGD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 30 && sl2 == 22) {
                var k2 = jd.rates.MXN;
                var k3 = jd.rates.SGD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 30 && sl2 == 23) {
                var k2 = jd.rates.MYR;
                var k3 = jd.rates.SGD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 30 && sl2 == 24) {
                var k2 = jd.rates.NOK;
                var k3 = jd.rates.SGD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 30 && sl2 == 25) {
                var k2 = jd.rates.PHP;
                var k3 = jd.rates.SGD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 30 && sl2 == 26) {
                var k2 = jd.rates.PLN;
                var k3 = jd.rates.SGD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 30 && sl2 == 27) {
                var k2 = jd.rates.RON;
                var k3 = jd.rates.SGD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 30 && sl2 == 28) {
                var k2 = jd.rates.RUB;
                var k3 = jd.rates.SGD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 30 && sl2 == 29) {
                var k2 = jd.rates.SEK;
                var k3 = jd.rates.SGD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 30 && sl2 == 31) {
                var k2 = jd.rates.THB;
                var k3 = jd.rates.SGD;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 30 && sl2 == 32) {
                var k2 = jd.rates.TRY;
                var k3 = jd.rates.SGD;
                var k4 = (k2 / k3);
                calculate(k4);
            }

      //*****************************************************************************************
            
            
            
            else if (sl1 ==  31 && sl2 == 1) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.THB;
                var k4 = (k2 / k3);
                calculate(k4);
            }else if (sl1 == 31  && sl2 == 2) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.THB;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
           
            else if (sl1 == 31 && sl2 == 3) {
                var k2 = jd.rates.EUR;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
            else if (sl1 == 31 && sl2 == 4) {
                var k2 = jd.rates.INR;
                var k3 = jd.rates.THB;
                var k4 = (k2 / k3);
                calculate(k4);
            }  else if (sl1 == 31 && sl2 == 5) {
                var k2 = jd.rates.JPY;
                var k3 = jd.rates.THB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 31 && sl2 == 6) {
                var k2 = jd.rates.NZD;
                var k3 = jd.rates.THB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 31 && sl2 == 7) {
                var k2 = jd.rates.ZAR;
                var k3 = jd.rates.THB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 31 && sl2 == 8) {
                var k2 = jd.rates.CHF;
                var k3 = jd.rates.THB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 31 && sl2 == 9) {
                var k2 = jd.rates.GBP;
                var k3 = jd.rates.THB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 31 && sl2 == 10) {
                var k2 = jd.rates.USD;
                var k3 = jd.rates.THB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 31 && sl2 == 11) {
                var k2 = jd.rates.BGN;
                var k3 = jd.rates.THB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 31 && sl2 == 12) {
                var k2 = jd.rates.BRL;
                var k3 = jd.rates.THB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 31 && sl2 == 13) {
                var k2 = jd.rates.CNY;
                var k3 = jd.rates.THB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 31 && sl2 == 14) {
                var k2 = jd.rates.CZK;
                var k3 = jd.rates.THB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 31 && sl2 == 15) {
                var k2 = jd.rates.DKK;
                var k3 = jd.rates.THB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 31 && sl2 == 16) {
                var k2 = jd.rates.HKD;
                var k3 = jd.rates.THB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 31 && sl2 == 17) {
                var k2 = jd.rates.HRK;
                var k3 = jd.rates.THB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 31 && sl2 == 18) {
                var k2 = jd.rates.HUF;
                var k3 = jd.rates.THB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 31 && sl2 == 19) {
                var k2 = jd.rates.IDR;
                var k3 = jd.rates.THB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 31 && sl2 == 20) {
                var k2 = jd.rates.ILS;
                var k3 = jd.rates.THB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 31 && sl2 == 21) {
                var k2 = jd.rates.KRW;
                var k3 = jd.rates.THB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 31 && sl2 == 22) {
                var k2 = jd.rates.MXN;
                var k3 = jd.rates.THB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 31 && sl2 == 23) {
                var k2 = jd.rates.MYR;
                var k3 = jd.rates.THB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 31 && sl2 == 24) {
                var k2 = jd.rates.NOK;
                var k3 = jd.rates.THB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 31 && sl2 == 25) {
                var k2 = jd.rates.PHP;
                var k3 = jd.rates.THB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 31 && sl2 == 26) {
                var k2 = jd.rates.PLN;
                var k3 = jd.rates.THB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 31 && sl2 == 27) {
                var k2 = jd.rates.RON;
                var k3 = jd.rates.THB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 31 && sl2 == 28) {
                var k2 = jd.rates.RUB;
                var k3 = jd.rates.THB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 31 && sl2 == 29) {
                var k2 = jd.rates.SEK;
                var k3 = jd.rates.THB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 31 && sl2 == 30) {
                var k2 = jd.rates.SGD;
                var k3 = jd.rates.THB;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 31 && sl2 == 32) {
                var k2 = jd.rates.TRY;
                var k3 = jd.rates.THB;
                var k4 = (k2 / k3);
                calculate(k4);
            }

            
      //*************************************************************************************
            
            
            else if (sl1 ==  32 && sl2 == 1) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.TRY;
                var k4 = (k2 / k3);
                calculate(k4);
            }else if (sl1 == 32  && sl2 == 2) {
                var k2 = jd.rates.AUD;
                var k3 = jd.rates.TRY;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
           
            else if (sl1 == 32 && sl2 == 3) {
                var k2 = jd.rates.EUR;
                var k3 = jd.rates.CAD;
                var k4 = (k2 / k3);
                calculate(k4);
            } 
            else if (sl1 == 32 && sl2 == 4) {
                var k2 = jd.rates.INR;
                var k3 = jd.rates.TRY;
                var k4 = (k2 / k3);
                calculate(k4);
            }  else if (sl1 == 32 && sl2 == 5) {
                var k2 = jd.rates.JPY;
                var k3 = jd.rates.TRY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 32 && sl2 == 6) {
                var k2 = jd.rates.NZD;
                var k3 = jd.rates.TRY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 32 && sl2 == 7) {
                var k2 = jd.rates.ZAR;
                var k3 = jd.rates.TRY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 32 && sl2 == 8) {
                var k2 = jd.rates.CHF;
                var k3 = jd.rates.TRY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 32 && sl2 == 9) {
                var k2 = jd.rates.GBP;
                var k3 = jd.rates.TRY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 32 && sl2 == 10) {
                var k2 = jd.rates.USD;
                var k3 = jd.rates.TRY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 32 && sl2 == 11) {
                var k2 = jd.rates.BGN;
                var k3 = jd.rates.TRY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 32 && sl2 == 12) {
                var k2 = jd.rates.BRL;
                var k3 = jd.rates.TRY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 32 && sl2 == 13) {
                var k2 = jd.rates.CNY;
                var k3 = jd.rates.TRY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 32 && sl2 == 14) {
                var k2 = jd.rates.CZK;
                var k3 = jd.rates.TRY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 32 && sl2 == 15) {
                var k2 = jd.rates.DKK;
                var k3 = jd.rates.TRY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 32 && sl2 == 16) {
                var k2 = jd.rates.HKD;
                var k3 = jd.rates.TRY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 32 && sl2 == 17) {
                var k2 = jd.rates.HRK;
                var k3 = jd.rates.TRY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 32 && sl2 == 18) {
                var k2 = jd.rates.HUF;
                var k3 = jd.rates.TRY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 32 && sl2 == 19) {
                var k2 = jd.rates.IDR;
                var k3 = jd.rates.TRY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 32 && sl2 == 20) {
                var k2 = jd.rates.ILS;
                var k3 = jd.rates.TRY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 32 && sl2 == 21) {
                var k2 = jd.rates.KRW;
                var k3 = jd.rates.TRY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 32 && sl2 == 22) {
                var k2 = jd.rates.MXN;
                var k3 = jd.rates.TRY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 32 && sl2 == 23) {
                var k2 = jd.rates.MYR;
                var k3 = jd.rates.TRY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 32 && sl2 == 24) {
                var k2 = jd.rates.NOK;
                var k3 = jd.rates.TRY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 32 && sl2 == 25) {
                var k2 = jd.rates.PHP;
                var k3 = jd.rates.TRY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 32 && sl2 == 26) {
                var k2 = jd.rates.PLN;
                var k3 = jd.rates.TRY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 32 && sl2 == 27) {
                var k2 = jd.rates.RON;
                var k3 = jd.rates.TRY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 32 && sl2 == 28) {
                var k2 = jd.rates.RUB;
                var k3 = jd.rates.TRY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 32 && sl2 == 29) {
                var k2 = jd.rates.SEK;
                var k3 = jd.rates.TRY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 32 && sl2 == 30) {
                var k2 = jd.rates.SGD;
                var k3 = jd.rates.TRY;
                var k4 = (k2 / k3);
                calculate(k4);
            } else if (sl1 == 32 && sl2 == 31) {
                var k2 = jd.rates.THB;
                var k3 = jd.rates.TRY;
                var k4 = (k2 / k3);
                calculate(k4);
            }

           
            
         
            
            
            

        });
    });


    function calculate(k4) {
        document.getElementById("cur2").value = document.getElementById("cur1").value * k4;
        
    }


    function caleur(er) {
        document.getElementById("cur2").value = document.getElementById("cur1").value * er;


    }

});