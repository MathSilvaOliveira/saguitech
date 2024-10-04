document.getElementById('nfseForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const valorVenda = parseFloat(document.getElementById('valorVenda').value);
    const itensVendidos = document.getElementById('itensVendidos').value;
    const irpf = parseFloat(document.getElementById('irpf').value);
    const pis = parseFloat(document.getElementById('pis').value);
    const cofins = parseFloat(document.getElementById('cofins').value);
    const inss = parseFloat(document.getElementById('inss').value);
    const issqn = parseFloat(document.getElementById('issqn').value);
    
    const calcularImposto = (valor, percentual) => (valor * percentual) / 100;
    
    const impostoIRPF = calcularImposto(valorVenda, irpf);
    const impostoPIS = calcularImposto(valorVenda, pis);
    const impostoCOFINS = calcularImposto(valorVenda, cofins);
    const impostoINSS = calcularImposto(valorVenda, inss);
    const impostoISSQN = calcularImposto(valorVenda, issqn);
    
    const totalImpostos = impostoIRPF + impostoPIS + impostoCOFINS + impostoINSS + impostoISSQN;
    const valorLiquido = valorVenda - totalImpostos;
    
    const notaFiscalContent = `
        <p><strong>Valor da Venda:</strong> R$ ${valorVenda.toFixed(2)}</p>
        <p><strong>Itens Vendidos:</strong> ${itensVendidos}</p>
        <h3 class="mt-3">Impostos:</h3>
        <ul class="list-unstyled">
            <li>IRPF (${irpf}%): R$ ${impostoIRPF.toFixed(2)}</li>
            <li>PIS (${pis}%): R$ ${impostoPIS.toFixed(2)}</li>
            <li>COFINS (${cofins}%): R$ ${impostoCOFINS.toFixed(2)}</li>
            <li>INSS (${inss}%): R$ ${impostoINSS.toFixed(2)}</li>
            <li>ISSQN (${issqn}%): R$ ${impostoISSQN.toFixed(2)}</li>
        </ul>
        <p><strong>Total de Impostos:</strong> R$ ${totalImpostos.toFixed(2)}</p>
        <p><strong>Valor Líquido:</strong> R$ ${valorLiquido.toFixed(2)}</p>
    `;
    
    document.getElementById('notaFiscalContent').innerHTML = notaFiscalContent;
    document.getElementById('notaFiscal').classList.remove('d-none');
});