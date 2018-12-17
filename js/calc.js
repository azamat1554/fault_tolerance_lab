$(document).ready(function () {

    $('#lab1_btn_calc').click(function () {
        var inputs = checkInputs("lab1_r_input", "lab1_m_input", "lab1_time_input");

        var l_r = inputs.l_r;
        var l_m = inputs.l_m;
        var t = inputs.t;

        var P = 1 - (1 - Math.exp(-l_r * t))
            * (1 - Math.exp(-l_m * t))
            * (1 - Math.exp(-l_m * t) * Math.exp(-l_m * t))
            * (1 - Math.exp(-l_m * t) * Math.exp(-l_m * t) * Math.exp(-l_m * t));
        document.getElementById("lab1_result").value = P.toFixed(20);
    });

    $('#lab2A_btn_calc').click(function () {
        var inputs = checkInputs("lab2A_r_input", "lab2A_m_input", "lab2A_time_input");

        var l_r = inputs.l_r;
        var l_m = inputs.l_m;
        var t = inputs.t;

        var P = 1 - (1 - (3 * Math.exp(-2 * l_r * t) - 2 * Math.exp(-3 * l_r * t)))
            * (1 - Math.exp(-l_m * t))
            * (1 - Math.exp(-l_m * t) * Math.exp(-l_m * t))
            * (1 - Math.exp(-l_m * t) * Math.exp(-l_m * t) * Math.exp(-l_m * t));
        document.getElementById("lab2A_result").value = P.toFixed(20);
    });

    $('#lab2B_btn_calc').click(function () {
        var inputs = checkInputs("lab2B_r_input", "lab2B_m_input", "lab2B_time_input");

        var l_r = inputs.l_r;
        var l_m = inputs.l_m;
        var t = inputs.t;

        var P = 1 - (1 - (2 * Math.exp(-l_r * t) - Math.exp(-2 * l_r * t)))
            * (1 - Math.exp(-l_m * t))
            * (1 - Math.exp(-l_m * t) * Math.exp(-l_m * t))
            * (1 - Math.exp(-l_m * t) * Math.exp(-l_m * t) * Math.exp(-l_m * t));
        document.getElementById("lab2B_result").value = P.toFixed(20);
    });

    function checkInputs(rInputId, mInputId, timeInputId) {
        var lambda_r = document.getElementById(rInputId).value;
        var lambda_m = document.getElementById(mInputId).value;
        var time = document.getElementById(timeInputId).value;

        if (
            lambda_r === "" || isNaN(lambda_r),
            lambda_m === "" || isNaN(lambda_m),
            time === "" || isNaN(time)
        ) {
            $('#error-modal').modal('show');
            return;
        }

        var l_r = Number(lambda_r);
        var l_m = Number(lambda_m);
        //check must be 0 <= lambda <= 1
        if (
            l_r < 0.0 || l_r > 1.0,
            l_m < 0.0 || l_m > 1.0
        ) {
            $('#error-modal').modal('show');
            return;
        }
        var t = Number(time);

        return {
            l_r: l_r,
            l_m: l_m,
            t: t
        };
    }
});