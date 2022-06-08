const ordersMock = [
  {
    number: '001',
    provider: 'Ronaldo',
    tags: 'pedido CE26p',
    observation: 'Deu certo',
    delivery: '2022-03-28T16:37:45.333Z',
    status: 'Aguardando aprovação',
    bought: 'Arthur',
    approved: 'Sim'
  },
  {
    number: '002',
    provider: 'Alana',
    tags: 'MF25P2;MF40P2;MF75P2;MF100S2',
    observation: 'Não deu certo',
    delivery: '2022-03-29T16:37:45.333Z',
    status: 'Aguardando envio ao fornecedor',
    bought: 'Kevin',
    approved: 'Não'
  },
  {
    number: '003',
    provider: 'Arthur',
    tags: 'pedidoMF75P2',
    observation: 'Deu certo',
    delivery: '2022-03-30T16:37:45.333Z',
    status: 'Aguardando confirmação',
    bought: 'Alana',
    approved: 'Sim'
  },
  {
    number: '004',
    provider: 'Arthur',
    tags: 'pedido CE28p;pedidoMF75P2',
    observation: 'Tá quase dando certo',
    delivery: '2022-03-31T16:37:45.333Z',
    status: 'Confirmado',
    bought: 'Bruna',
    approved: 'Não'
  },
  {
    number: '005',
    provider: 'Gustavo',
    tags: 'pedido CE29p;pedidoMF75P2',
    observation: 'Não deu certo',
    delivery: '2022-04-01T16:37:45.333Z',
    status: 'Atrasado',
    bought: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '006',
    provider: 'Isabela',
    tags: 'pedido CE29p',
    observation: 'Não deu certo',
    delivery: '2022-04-02T16:37:45.333Z',
    status: 'Aguardando aprovação',
    bought: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '007',
    provider: 'Gustavo',
    tags: 'pedido CE29p',
    observation: 'Não deu certo',
    delivery: '2022-04-03T16:37:45.333Z',
    status: 'Aguardando envio ao fornecedor',
    bought: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '008',
    provider: 'Gustavo',
    tags: 'pedido CE29p;pedidoMF75P2',
    observation: 'Não deu certo',
    delivery: '2022-04-04T16:37:45.333Z',
    status: 'Aguardando confirmação',
    bought: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '009',
    provider: 'Isabela',
    tags: 'pedidoMF75P2',
    observation: 'Não deu certo',
    delivery: '2022-04-02T16:37:45.333Z',
    status: 'Aguardando aprovação',
    bought: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '010',
    provider: 'Isabela',
    tags: 'MF25P2',
    observation: 'Não deu certo',
    delivery: '2022-04-02T16:37:45.333Z',
    status: 'Aguardando aprovação',
    bought: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '011',
    provider: 'Ronaldo',
    tags: 'pedido CE26p',
    observation: 'Deu certo',
    delivery: '2022-03-28T16:37:45.333Z',
    status: 'Aguardando aprovação',
    bought: 'Arthur',
    approved: 'Sim'
  },
  {
    number: '012',
    provider: 'Alana',
    tags: 'MF25P2;MF40P2;MF75P2;MF100S2',
    observation: 'Não deu certo',
    delivery: '2022-03-29T16:37:45.333Z',
    status: 'Aguardando envio ao fornecedor',
    bought: 'Kevin',
    approved: 'Não'
  },
  {
    number: '013',
    provider: 'Arthur',
    tags: 'pedidoMF75P2',
    observation: 'Deu certo',
    delivery: '2022-03-30T16:37:45.333Z',
    status: 'Aguardando confirmação',
    bought: 'Alana',
    approved: 'Sim'
  },
  {
    number: '014',
    provider: 'Arthur',
    tags: 'pedido CE28p;pedidoMF75P2',
    observation: 'Tá quase dando certo',
    delivery: '2022-03-31T16:37:45.333Z',
    status: 'Confirmado',
    bought: 'Bruna',
    approved: 'Não'
  },
  {
    number: '015',
    provider: 'Gustavo',
    tags: 'pedido CE29p;pedidoMF75P2',
    observation: 'Não deu certo',
    delivery: '2022-04-01T16:37:45.333Z',
    status: 'Atrasado',
    bought: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '016',
    provider: 'Isabela',
    tags: 'pedido CE29p',
    observation: 'Não deu certo',
    delivery: '2022-04-02T16:37:45.333Z',
    status: 'Aguardando aprovação',
    bought: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '017',
    provider: 'Gustavo',
    tags: 'pedido CE29p',
    observation: 'Não deu certo',
    delivery: '2022-04-03T16:37:45.333Z',
    status: 'Aguardando envio ao fornecedor',
    bought: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '018',
    provider: 'Gustavo',
    tags: 'pedido CE29p;pedidoMF75P2',
    observation: 'Não deu certo',
    delivery: '2022-04-04T16:37:45.333Z',
    status: 'Aguardando confirmação',
    bought: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '019',
    provider: 'Isabela',
    tags: 'pedidoMF75P2',
    observation: 'Não deu certo',
    delivery: '2022-04-02T16:37:45.333Z',
    status: 'Aguardando aprovação',
    bought: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '010',
    provider: 'Isabela',
    tags: 'MF25P2',
    observation: 'Não deu certo',
    delivery: '2022-04-02T16:37:45.333Z',
    status: 'Aguardando aprovação',
    bought: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '011',
    provider: 'Ronaldo',
    tags: 'pedido CE26p',
    observation: 'Deu certo',
    delivery: '2022-03-28T16:37:45.333Z',
    status: 'Aguardando aprovação',
    bought: 'Arthur',
    approved: 'Sim'
  },
  {
    number: '012',
    provider: 'Alana',
    tags: 'MF25P2;MF40P2;MF75P2;MF100S2',
    observation: 'Não deu certo',
    delivery: '2022-03-29T16:37:45.333Z',
    status: 'Aguardando envio ao fornecedor',
    bought: 'Kevin',
    approved: 'Não'
  },
  {
    number: '023',
    provider: 'Arthur',
    tags: 'pedidoMF75P2',
    observation: 'Deu certo',
    delivery: '2022-03-30T16:37:45.333Z',
    status: 'Aguardando confirmação',
    bought: 'Alana',
    approved: 'Sim'
  },
  {
    number: '024',
    provider: 'Arthur',
    tags: 'pedido CE28p;pedidoMF75P2',
    observation: 'Tá quase dando certo',
    delivery: '2022-03-31T16:37:45.333Z',
    status: 'Confirmado',
    bought: 'Bruna',
    approved: 'Não'
  },
  {
    number: '025',
    provider: 'Gustavo',
    tags: 'pedido CE29p;pedidoMF75P2',
    observation: 'Não deu certo',
    delivery: '2022-04-01T16:37:45.333Z',
    status: 'Atrasado',
    bought: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '026',
    provider: 'Isabela',
    tags: 'pedido CE29p',
    observation: 'Não deu certo',
    delivery: '2022-04-02T16:37:45.333Z',
    status: 'Aguardando aprovação',
    bought: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '027',
    provider: 'Gustavo',
    tags: 'pedido CE29p',
    observation: 'Não deu certo',
    delivery: '2022-04-03T16:37:45.333Z',
    status: 'Aguardando envio ao fornecedor',
    bought: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '028',
    provider: 'Gustavo',
    tags: 'pedido CE29p;pedidoMF75P2',
    observation: 'Não deu certo',
    delivery: '2022-04-04T16:37:45.333Z',
    status: 'Aguardando confirmação',
    bought: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '029',
    provider: 'Isabela',
    tags: 'pedidoMF75P2',
    observation: 'Não deu certo',
    delivery: '2022-04-02T16:37:45.333Z',
    status: 'Aguardando aprovação',
    bought: 'Ronaldo',
    approved: 'Sim'
  },
  {
    number: '010',
    provider: 'Isabela',
    tags: 'MF25P2',
    observation: 'Não deu certo',
    delivery: '2022-04-02T16:37:45.333Z',
    status: 'Aguardando aprovação',
    bought: 'Ronaldo',
    approved: 'Sim'
  }
]

export default ordersMock
