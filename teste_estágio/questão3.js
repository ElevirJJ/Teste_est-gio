const faturamentoMensal = [
    { "dia": 1, "valor": 1000 },
    { "dia": 2, "valor": 0 },
    { "dia": 3, "valor": 500 },
    { "dia": 4, "valor": 2000 },
    { "dia": 5, "valor": 0 },
  ];
  
  function calcularEstatisticas(faturamentoMensal) {
    const diasComFaturamento = faturamentoMensal.filter(dia => dia.valor > 0);
    
    const menorValor = Math.min(...diasComFaturamento.map(dia => dia.valor));
    const maiorValor = Math.max(...diasComFaturamento.map(dia => dia.valor));
    
    const totalFaturamento = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0);
    const media = totalFaturamento / diasComFaturamento.length;
    
    const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > media).length;
    
    return {
      menorValor,
      maiorValor,
      diasAcimaDaMedia
    };
  }
  
  const resultado = calcularEstatisticas(faturamentoMensal);
  console.log(`Menor valor: ${resultado.menorValor}`);
  console.log(`Maior valor: ${resultado.maiorValor}`);
  console.log(`Dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);
  