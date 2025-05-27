const vendas = [];

const venda = (cliente, total) => 
    ({cliente:    cliente, total: total});

vendas.push(venda('João', 100));
vendas.push(venda('Maria', 200));
vendas.push(venda('José', 150));

const reduzx =vendas.reduce((acc, venda) => {
    acc[venda.cliente] = (acc[venda.cliente] || 0) + venda.total;
    return acc;
}, {});


console.log(reduzx);
