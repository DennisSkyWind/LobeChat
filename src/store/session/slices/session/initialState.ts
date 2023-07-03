import { LanguageModel } from '@/types/llm';
import { LobeAgentSession } from '@/types/session';

export interface SessionLoadingState {
  summarizingTitle: boolean;
  summarizingDescription: boolean;
  pickingEmojiAvatar: boolean;
}

export interface SessionState {
  sessions: Record<string, LobeAgentSession>;
  /**
   * @title 当前活动的会话
   * @description 当前正在编辑或查看的会话
   * @default null
   */
  activeId: string | null;
  searchKeywords: string;
  loading: SessionLoadingState;
}

export const initLobeSessionAgent: LobeAgentSession = {
  id: '',
  config: {
    model: LanguageModel.GPT3_5,
    systemRole: '',
    params: { temperature: 0.6 },
  },
  meta: {},
  chats: {},
};

export const initialSessionState: SessionState = {
  sessions: {},

  activeId: null,
  searchKeywords: '',

  // loading 中间态
  loading: {
    summarizingTitle: false,
    summarizingDescription: false,
    pickingEmojiAvatar: false,
  },
};
