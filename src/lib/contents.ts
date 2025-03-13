import First from '@/assets/articles-images/1.jpg';

import {StaticImageData} from 'next/image';

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
    {
        title: 'O precursor de uma nova indústria',
        left_content:
            'O ENIAC foi o primeiro computador eletrônico, precursor dos modernos. Realizava operações matemáticas e comparações, sendo essencial para o desenvolvimento da computação atual.O ENIAC usava acumuladores que funcionavam como somadores e unidades de armazenamento, sem uma memória central.',
        right_content:
            'O armazenamento era distribuído nas unidades funcionais, e a programação era feita externamente, não internamente. Apesar dessas diferenças, sua funcionalidade é surpreendenteme nte similar aos computadores modernos, mesmo tendo sido projetado há décadas.',
        image: First,
        type: 'article',
        isLocked: false,
    },
    {
        title: 'Uma herança a ser preservada',
        left_content:
            'O ENIAC, pioneiro da computação digital, tornou-se economicamente inviável e foi desativado em 2 de outubro de 1955. Sugeriu-se sua preservação no instituto Smithsonian, com esforços já em andamento. Desde 1939, o ENIAC surgiu para atender à necessidade de cálculos mais rápidos proposto por Mauchly e Eckert e apoiado pelo Coronel Gillon.',
        right_content:
            'Construído por Eckert e operado por uma equipe dedicada, o ENIAC produziu\n' +
            'resultados inéditos, mas o avanço tecnológico que ele próprio impulsionou o tornou obsoleto. Sua desativação marcou o fim natural de um projeto que cumpriu seu propósito histórico.',
        image: First,
        type: 'article',
        isLocked: false,
    },
    {
        title: 'Um antigo gigante computacional',
        left_content:
            'O ENIAC,Computador Integrador Numérico Eletrônico, era um computador enorme, pesando mais de 30 toneladas e consumindo quase 200 quilowatts de energia, com 19.000 tubos de vácuo e outros componentes. Apesar de seu tamanho e complexidade, foi o protótipo dos computadores modernos, incorporando conceitos como portas lógicas ("e", "ou") e flip-flops para armazenamento e controle.',
        right_content:
            'Ele realizava operações matemáticas complexas (multiplicação, divisão e raízes quadradas) e comparava números, armazenando até 20 números decimais de 10 dígitos. O ENIAC não tinha uma memória central; o armazenamento era distribuído em suas unidades funcionais, e a programação era feita externamente. Apesar de ter sido projetado décadas atrás, sua funcionalidade é similar à dos computadores atuais, marcando o início da era da computação digital.',
        image: First,
        type: 'article',
        isLocked: false,
    },
    {
        title: 'As complicações do ENIAC',
        left_content:
            'O ENIAC foi um dispositivo computacional eletroeletrônico e digital, pesando 30 toneladas e usando 19.000 tubos de vácuo. Realizava operações matemáticas complexas e armazenava até 20 números de 10 dígitos. Pioneiro da computação moderna, introduziu conceitos como portas lógicas e flip-flops.',
        right_content:
            'O ENIAC realizava operações matemáticas complexas como raízes quadradas e armazenava até 20 números de 10 dígitos. Inicialmente lento para programar, foi modificado em 1948 para usar programas fixos internamente, sugerido por John von Neumann, eliminando a necessidade de reconectar cabos e agilizando operações. Em 1949, com o Projeto Chore, o ENIAC demonstrou maior eficiência e menos falhas, consolidando-se como uma ferramenta útil para cálculos complexos.',
        image: First,
        type: 'article',
        isLocked: false,
    },
    {
        title: 'As mulheres do ENIAC',
        left_content:
            'O ENIAC, o primeiro dispositivo eletrônico digital, foi desenvolvido por John Mauchly e J. Presper Eckert na Universidade da Pensilvânia e programado inicialmente por seis mulheres: Kathleen McNulty, Jean Jennings, Frances Holberton, Marlyn Melzer, Frances Spence e Ruth Teitelbaum. Essas mulheres, recrutadas por suas habilidades matemáticas durante a Segunda Guerra Mundial, enfrentaram desafios únicos, já que a programação de computadores era uma área completamente nova.',
        right_content:
            'Apesar de suas contribuições cruciais para cálculos balísticos e, posteriormente, para estudos termonucleares, elas não receberam o mesmo reconhecimento que os homens no projeto. Sua história reflete a invisibilidade das mulheres na ciência e na computação, destacando a necessidade de reconhecer suas conquistas como pioneiras na área, superando barreiras de gênero e discriminação.',
        image: First,
        type: 'article',
        isLocked: false,
    },
    {
        title: 'A história do ENIAC',
        left_content:
            'O ENIAC, primeiro equipamento eletrônico chamado de computador digital, foi criado por Mauchly e Eckert na Universidade da Pensilvânia (1943-1945) com financiamento do Exército dos EUA. Pesando 30 toneladas e consumindo 200 quilowatts, realizava operações complexas e introduziu conceitos como portas lógicas e flip-flops, sendo usado para cálculos balísticos e científicos.',
        right_content:
            'Originalmente programado externamente, o ENIAC foi adaptado em 1948 para operar com programas internos, graças a uma sugestão de John von Neumann, aumentando sua eficiência. Desativado em 1955, tornou-se obsoleto com o avanço tecnológico, mas seu legado foi preservado no Instituto Smithsonian, marcando o início da era da computação digital e impulsionando o desenvolvimento dos computadores modernos.',
        image: First,
        type: 'article',
        isLocked: false,
    },
];
