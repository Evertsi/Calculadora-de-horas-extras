function calcular() {
    const entrada = new Date("2000-01-01 " + document.getElementById("entrada").value);
    const saida = new Date("2000-01-01 " + document.getElementById("saida").value);
    const inicioAlmoco = new Date("2000-01-01 " + document.getElementById("inicioAlmoco").value);
    const fimAlmoco = new Date("2000-01-01 " + document.getElementById("fimAlmoco").value);
    const jornadaPadrao = parseFloat(document.getElementById("jornadaPadrao").value);
  
    const horasTrabalhadas = calcularHorasTrabalhadas(entrada, saida, inicioAlmoco, fimAlmoco);
    const horasAlmoco = calcularHorasAlmoco(inicioAlmoco, fimAlmoco);
    const horasExtras = calcularHorasExtras(horasTrabalhadas, horasAlmoco, jornadaPadrao);
  
    document.getElementById("horasTotaisDia").textContent = formatarHorasMinutos(horasTrabalhadas);
    document.getElementById("horasAlmoco").textContent = formatarHorasMinutos(horasAlmoco);
    document.getElementById("horasExtras").textContent = formatarHorasMinutos(horasExtras);
  }
  
  function calcularHorasTrabalhadas(entrada, saida, inicioAlmoco, fimAlmoco) {
    const diferenca = saida - entrada;
    const totalHoras = diferenca / (1000 * 60 * 60); // Converter para horas decimais
  
    let horasAlmoco = 0;
    if (inicioAlmoco < fimAlmoco) {
      horasAlmoco = (fimAlmoco - inicioAlmoco) / (1000 * 60 * 60);
    }
  
    return totalHoras - horasAlmoco;
  }
  
  function calcularHorasAlmoco(inicioAlmoco, fimAlmoco) {
    let horasAlmoco = 0;
    if (inicioAlmoco < fimAlmoco) {
      horasAlmoco = (fimAlmoco - inicioAlmoco) / (1000 * 60 * 60);
    }
    return horasAlmoco;
  }
  
  function calcularHorasExtras(horasTrabalhadas, horasAlmoco, jornadaPadrao) {
    let horasExtras = 0;
    if (horasTrabalhadas - horasAlmoco > jornadaPadrao) {
      horasExtras = (horasTrabalhadas - horasAlmoco - jornadaPadrao);
    }
    return horasExtras;
  }
  
  
  function formatarHorasMinutos(valorDecimal) {
    const horas = Math.floor(valorDecimal);
    const minutosDecimais = (valorDecimal - horas) * 60;
    const minutos = Math.floor(minutosDecimais);
  
    const horasString = horas.toString().padStart(2, "0");
    const minutosString = minutos.toString().padStart(2, "0");
  
    return `${horasString}:${minutosString}`;
  }