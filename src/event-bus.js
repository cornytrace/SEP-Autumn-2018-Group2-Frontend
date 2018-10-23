// This file is used to pass messages between vue components using events.
// You can subscribe to events using EventBus.$on('nameOfEvent", functionToBeExecuted)
// You can emit event using EventBus.$emit('nameOfEvent', [...args])

import Vue from 'vue';
export const EventBus = new Vue();
