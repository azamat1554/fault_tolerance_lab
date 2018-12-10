$(document).ready(function () {

    $('#btn_calc').click(function () {
        var lambda_r = document.getElementById("r_input").value;
        var lambda_m = document.getElementById("m_input").value;
        var time = document.getElementById("time_input").value;

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
        var t = Number(time);
        //todo
        var P = (1 - l_r * t) * (1 - l_m * t) * l_m * t * (1 - l_m * t) * l_m * t * l_m * t
            + (1 - l_r * t) * (1 - l_m * t) * (1 - l_m * t) * l_m * t * (1 - l_m * t) * l_m * t
            + (1 - l_r * t) * (1 - l_m * t) * (1 - l_m * t) * l_m * t * l_m * t * (1 - l_m * t);

        document.getElementById("result").value = P;
    })
});