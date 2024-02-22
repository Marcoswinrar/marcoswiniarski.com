export const dateConverterToPtBr = (dateString: string) => 
  new Date(dateString).toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo", day: '2-digit', month: '2-digit', year: 'numeric'})