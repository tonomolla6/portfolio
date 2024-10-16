<template lang="pug">
.about(:class="{ 'about-mode': mode === 1 }")
  .chat-container(:class="{ 'nav-active': mode === 1 }")
    h2 {{ $t('chat-with-ai') }}
    .chat-messages(ref="chatMessages")
      .message(v-for="message in messages" :key="message.id" :class="{ 'user-message': message.role === 'user', 'ai-message': message.role === 'assistant' }")
        .message-content(v-html="formatMessage(message.content)")
      .message.ai-message(v-if="isLoading")
        .message-content
          .loader {{ loadingText }}
    .chat-input
      input(
        v-model="userInput" 
        @keyup.enter="sendMessage" 
        :placeholder="$t('chat-placeholder')"
      )
      button(@click="sendMessage") {{ $t('send') }}
    .example-questions
      button.example-question(v-for="question in exampleQuestions" :key="question" @click="askExampleQuestion(question)") {{ question }}
</template>

<script>
import { ref, onMounted, onUnmounted, computed, watch, nextTick } from 'vue';
import { useModeStore } from '~/store/mode';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { useI18n } from 'vue-i18n';

export default {
  setup() {
    const modeStore = useModeStore();
    const mode = computed(() => modeStore.mode);
    const { t, locale } = useI18n();

    const messages = ref([
      {
        id: 1,
        role: 'assistant',
        content: t('initial-greeting'),
      },
    ]);
    const userInput = ref('');
    const chatMessages = ref(null);
    const isLoading = ref(false);
    const loadingText = ref('Tono AI está escribiendo');

    const exampleQuestions = [
      '¿Cuál es tu experiencia?',
      '¿Qué proyectos has realizado?',
      '¿Cuáles son tus habilidades?',
    ];

    const scrollToBottom = () => {
      nextTick(() => {
        if (chatMessages.value) {
          chatMessages.value.scrollTop = chatMessages.value.scrollHeight;
        }
      });
    };

    const sendMessage = async () => {
      if (userInput.value.trim() === '') return;

      const newMessage = {
        id: Date.now(),
        role: 'user',
        content: userInput.value,
      };
      messages.value.push(newMessage);

      const userMessage = userInput.value;
      userInput.value = '';
      isLoading.value = true;

      try {
        const response = await fetch(
          'https://aged-haze-008d.mail-15f.workers.dev/',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              messages: [
                {
                  role: 'system',
                  content: `The user's language is ${locale.value}. Please respond in ${locale.value}.`,
                },
                { role: 'user', content: userMessage },
              ],
            }),
          }
        );

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(
            `Error en la respuesta del servidor: ${response.status} ${response.statusText} - ${errorText}`
          );
        }

        const data = await response.json();

        if (!data.response) {
          throw new Error(
            'La respuesta del servidor no contiene el campo "response".'
          );
        }

        const assistantMessage = {
          id: Date.now(),
          role: 'assistant',
          content: data.response,
        };
        messages.value.push(assistantMessage);
      } catch (error) {
        console.error('Error al enviar mensaje:', error);
        messages.value.push({
          id: Date.now(),
          role: 'assistant',
          content: t('error-message'),
        });
      } finally {
        isLoading.value = false;
        scrollToBottom();
      }
    };

    const askExampleQuestion = (question) => {
      userInput.value = question;
      sendMessage();
    };

    const formatMessage = (message) => {
      const rawHtml = marked(message, { sanitize: false });
      const sanitizedHtml = DOMPurify.sanitize(rawHtml);
      return sanitizedHtml;
    };

    let loadingInterval;

    const startLoadingAnimation = () => {
      let dots = 0;
      loadingInterval = setInterval(() => {
        dots = (dots + 1) % 4;
        loadingText.value = `Tono AI está escribiendo${''.padEnd(dots, '.')}`;
      }, 500);
    };

    const stopLoadingAnimation = () => {
      clearInterval(loadingInterval);
    };

    onMounted(() => {
      scrollToBottom();
    });

    onUnmounted(() => {
      stopLoadingAnimation();
    });

    watch(isLoading, (newValue) => {
      if (newValue) {
        startLoadingAnimation();
      } else {
        stopLoadingAnimation();
      }
    });

    return {
      mode,
      messages,
      userInput,
      sendMessage,
      chatMessages,
      formatMessage,
      isLoading,
      loadingText,
      exampleQuestions,
      askExampleQuestion,
    };
  },
};
</script>

<style scoped>
p {
  margin: 0px !important;
}

.about {
  background-color: var(--theme-background-secondary);
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
  padding: 50px 0px 120px 0px;
}

.about-mode {
  padding-top: 30px;
  height: calc(100vh - 104px);
}

.chat-container {
  width: 100%;
  max-width: 800px;
  height: 100%;
  background-color: var(--theme-background-primary);
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.chat-container h2 {
  color: var(--theme-color-secondary);
  text-align: center;
  padding: 20px;
  margin: 0;
  border-bottom: 1px solid var(--theme-background-secondary);
  font-size: 1.5rem;
}

.chat-messages {
  flex-grow: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.message {
  margin-bottom: 15px;
  max-width: 80%;
}

.message-content {
  padding: 12px 16px;
  border-radius: 18px;
  font-size: 1rem;
  line-height: 1.4;
}

.user-message {
  align-self: flex-end;
}

.user-message .message-content {
  background-color: var(--theme-color-primary);
  color: white;
  border-bottom-right-radius: 4px;
}

.ai-message {
  align-self: flex-start;
}

.ai-message .message-content {
  background-color: var(--theme-background-secondary);
  color: var(--theme-color-secondary);
  border-bottom-left-radius: 4px;
}

.chat-input {
  display: flex;
  padding: 20px;
  background-color: var(--theme-background-secondary);
  gap: 10px;
}

.chat-input input {
  flex-grow: 1;
  padding: 12px 16px;
  border: none;
  background-color: var(--theme-background-primary);
  color: var(--theme-color-secondary);
  font-size: 1rem;
}

.chat-input button {
  padding: 12px 24px;
  background-color: var(--theme-color-primary);
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.chat-input button:hover {
  background-color: var(--theme-color-primary-dark, #0053ba);
}

.loader {
  display: inline-block;
  position: relative;
  height: 20px;
  color: var(--theme-color-secondary);
  opacity: 50%;
}

.example-questions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px 20px;
  background-color: var(--theme-background-secondary);
}

.example-question {
  background-color: var(--theme-background-primary);
  color: var(--theme-color-secondary);
  border: 1px solid var(--theme-color-primary);
  padding: 8px 16px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.example-question:hover {
  background-color: var(--theme-color-primary);
  color: white;
}

@media (max-width: 900px) {
  .chat-container {
    border-radius: 0;
  }

  .chat-container h2 {
    font-size: 1.3rem;
    padding: 15px;
  }

  .chat-messages {
    padding: 15px;
  }

  .message {
    max-width: 85%;
  }

  .message-content {
    font-size: 0.95rem;
    padding: 10px 14px;
  }

  .chat-input {
    padding: 15px;
  }

  .chat-input input {
    padding: 10px 14px;
    font-size: 0.95rem;
  }

  .chat-input button {
    padding: 10px 20px;
    font-size: 0.95rem;
  }

  .example-questions {
    padding: 10px;
  }

  .example-question {
    font-size: 0.85rem;
    padding: 6px 12px;
  }
}

@media (max-width: 600px) {
  .chat-container h2 {
    font-size: 1.2rem;
    padding: 12px;
  }

  .chat-messages {
    padding: 12px;
  }

  .message {
    max-width: 90%;
  }

  .message-content {
    font-size: 0.9rem;
    padding: 8px 12px;
  }

  .chat-input {
    padding: 12px;
  }

  .chat-input input {
    padding: 8px 12px;
    font-size: 0.9rem;
  }

  .chat-input button {
    padding: 8px 16px;
    font-size: 0.9rem;
  }

  .example-questions {
    padding: 8px;
  }

  .example-question {
    font-size: 0.8rem;
    padding: 5px 10px;
  }
}
</style>
