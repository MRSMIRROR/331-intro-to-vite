<template>
    <div class="event-details">
      <span class="category">{{ event.category }}</span>
      <span class="organizer">{{ event.organizer }}</span>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue'
  import { Event } from '@/types/Event'
  
  defineProps<{ event: Event }>()
  </script>
  
  <style scoped>
  .event-details {
    text-align: right;
    font-size: 16px;
  }
  
  .category, .organizer {
    display: block;
  }
  </style>
  