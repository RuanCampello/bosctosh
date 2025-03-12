import First from '@/assets/articles-images/1.jpg';
import { StaticImageData } from 'next/image';

type Content = {
  title: string;
  left_content: string;
  right_content: string;
  image: StaticImageData;
  type: 'article' | 'file' | 'folder';
  isLocked?: boolean;
};

export const contents: Content[] = [
  {
    title: 'Um legado para a humanidade',
    left_content:
      'Em 1942, o Coronel Gillon assumiu o comando da Artilharia, supervisionando pesquisas, incluindo cálculos balísticos. Em 1943, o Capitão Goldstine e o Professor Brainerd apresentaram a Gillon os conceilas técnicos do ENIAC, desenvolvidos por Mauchly e Eckert. Apesar da possível oposição e do caráter especulativo do projeto, Gillon reconheceu sua importância para cálculos balísticos e pesquisas, comprometendo-se a garantir autorização e apoio para o desenvolvimento do ENIAC.',
    right_content:
      'O ENIAC foi o protótipo do qual a maioria dos outros computadores modernos evoluiram.Este progenitor de uma nova indústria - a chave que abriu novas abordagens para a solução de muitos problemas científicos perplexos, o dispositivo pioneiro na evolução da computação digital de alta velocidade e maquinas de processamento automatico de dados - será preservado para a posteridade.',
    image: First,
    type: 'article',
    isLocked: false,
  },
];
