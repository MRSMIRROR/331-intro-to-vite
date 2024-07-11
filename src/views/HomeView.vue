<script setup lang="ts">
  import EventCard from '@/components/EventCard.vue'
  import { Event } from '@/type/Event'
  import { ref } from 'vue'
  const events = ref<Event[]>([
    {
      id: 5928101,
      category: 'animal welfare',  
      title: 'Cat Adoption Day',
      description: 'Find your new feline friend at this event.',
      location: 'Meow Town',
      ate: 'January 28, 2022',
      time: '12:00',
      petsAllowed: true,
      organizer: 'Kat Laydee'
    },
    {
      id: 4582797,
      category: 'food',  
      title: 'Community Gardening',
      description: 'Join us as we tend to the community edible plants.',
      location: 'Flora City',
      ate: 'March 14, 2022',
      time: '10:00',
      petsAllowed: true,
      organizer: 'Fern Pollin'
    },
    {
      id: 8419988,
      category: 'Sustainability',  
      title: 'Beach Cleanup',
      description: 'Help pick up trash along the shore.',
      location: 'Playa del carmen',
      ate: 'July 22, 2022',
      time: '11:00',
      petsAllowed: true,
      organizer: 'Carey Wales'
    }
  ])
</script>

<template>
  <div class="home">
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
  </div>
</template>
