import { create } from 'zustand'
import { TrackInputs } from 'shared/types/generate'
import _ from 'lodash'

interface FormState {
  formState: TrackInputs
  currentTags: {
    moodTags: string
    styleTags: string
  }
  setTag: (newTag: string, inputType: InputType) => void
  setTagFromString: (value: string, inputType: InputType) => void
  resetCurrentTags: () => void
  setAllData: (data: TrackInputs) => void
}

type InputType = 'moodTags' | 'styleTags'

export const useTrackForm = create<FormState>(set => ({
  formState: {
    title: '',
    mood: '',
    object: '',
    surrounding: '',
    coverDescription: '',
    isLoFi: true,
  },
  currentTags: {
    moodTags: '',
    styleTags: '',
  },
  setTag: (newTag: string, inputType: InputType) =>
    set(state => {
      const stateTags = state.currentTags[inputType]
        .split(',')
        .map(tag => tag && tag.trim())
        .filter(tag => tag)
      const setTags = (): string => {
        if (stateTags.includes(newTag)) {
          return stateTags.filter(tag => tag !== newTag).join(', ')
        } else {
          return [...stateTags, newTag].join(', ')
        }
      }
      return {
        currentTags: {
          ...state.currentTags,
          [inputType]: setTags(),
        },
      }
    }),
  setTagFromString: (value: string, inputType: InputType) =>
    set(state => {
      const tagsArray = value
        .split(',')
        .map(tag => tag && tag.trim())
        .filter(tag => tag)
      const stateTags = state.currentTags[inputType]
        .split(',')
        .map(tag => tag && tag.trim())
        .filter(tag => tag)
      const diff = _.difference(tagsArray, stateTags)
      const newStateTags = (): string => {
        if (tagsArray.length > stateTags.length && diff.length > 0) {
          if (stateTags.length === 0) {
            return diff.join('')
          }
          return [...stateTags, diff].join(', ')
        }
        if (tagsArray.length < stateTags.length && diff.length > 0) {
          return _.pullAll(stateTags, diff).join('')
        }
        return value
      }
      return {
        currentTags: {
          ...state.currentTags,
          [inputType]: newStateTags(),
        },
      }
    }),
  resetCurrentTags: () =>
    set(() => ({
      currentTags: {
        moodTags: '',
        styleTags: '',
      },
    })),
  setAllData: data => {
    set(state => ({
      formState: {
        ...state.formState,
        title: data.title,
        mood: data.mood,
        object: data.object,
        surrounding: data.surrounding,
        coverDescription: data.coverDescription,
        isLoFi: data.isLoFi,
      },
    }))
  },
}))
