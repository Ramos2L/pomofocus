<script setup lang="ts">
import tomatoImage from '@/assets/tomato_crazy.png'
</script>

<template>
  <div class="flex flex-col items-center justify-center h-full p-8 gap-4">
    <div class="flex max-w-300 flex-1 flex-col gap-6 p-4 text-justify text-3xl leading-12 text-[#d23a1e]">
      <h1 class="text-4xl">🍅 SOBRE O PROJETO</h1>
      <h2>O Clássico Método Pomodoro, com a Energia dos Anos 30!</h2>
      <h2>
        Bem-vindo ao nosso cronômetro definitivo de foco! Este site foi criado para unir uma das
        técnicas de produtividade mais eficientes do mundo — o Método Pomodoro — à estética
        vibrante, nostálgica e cheia de atitude dos desenhos animados da Era de Ouro da animação
        (famosa pelos traços marcantes de borracha e nanquim).
      </h2>
      <h2>🕹️ Por que usar este Cronômetro?</h2>
      <h2>
        Manter o foco hoje em dia é um verdadeiro desafio (quase uma batalha de chefe!). Nossa
        missão é tornar seus períodos de estudo e trabalho mais leves, dinâmicos e visualmente
        estimulantes.
      </h2>
      <h2>Foco sem Distrações: Uma interface limpa, direto ao ponto e livre de poluição visual.</h2>
      <h2>Identidade Visual Única: Produtividade não precisa ser chata ou corporativa demais.</h2>
      <h2>
        Ritmo Perfeito: Divisão clássica de blocos de alta concentração com pausas merecidas para
        recuperar as energias.
      </h2>
      <h2>🛠️ Como Funciona?</h2>
      <h2>
        Trabalho Focus (25 min): Dedique sua atenção total à sua tarefa atual. Sem olhar as redes
        sociais!
      </h2>
      <h2>Pausa Curta (5 min): Respire fundo, pegue um café ou estique as pernas.</h2>
      <h2>
        Pausa Longa (15 min): Depois de 4 ciclos de foco, relaxe um pouco mais antes da próxima
        rodada.
      </h2>
      <h2>
        💡 Nota de Bastidores: Este projeto nasceu da paixão pelo desenvolvimento web e pelo design
        retro. Ele foi planejado, desenhado e codificado para entregar uma experiência fluida,
        rápida e responsiva. Se este tomate animado te ajudou a riscar mais uma tarefa da sua lista
        hoje, nossa missão foi cumprida!
      </h2>
      <h2>Prepare o seu cronômetro, ajuste o ritmo e bom foco!</h2>
    </div>

    <img :src="tomatoImage" alt="Tomate" class="sm:h-42 md:h-64 lg:h-125 h-50 object-cover">
  </div>
</template>

<style scoped></style>
