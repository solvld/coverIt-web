import { create } from 'zustand'
import { TrackInputs } from '../ui/Form'
import _ from 'lodash'

interface FormState {
  formState: {
    title: string
    moodTags: string
    object: string
    surrounding: string
    coverDescription: string
    isLoFi: boolean
  }
  setTag: (newTag: string, inputType: InputType) => void
  setTagFromString: (value: string, inputType: InputType) => void
  setAllData: (data: TrackInputs) => void
}

type InputType = 'moodTags' | 'coverDescription'

export const useTrackForm = create<FormState>(set => ({
  formState: {
    title: '',
    moodTags: '',
    object: '',
    surrounding: '',
    coverDescription: '',
    isLoFi: true,
  },
  setTag: (newTag: string, inputType: InputType) =>
    set(state => {
      const stateMoods = state.formState[inputType]
        .split(',')
        .map(tag => tag && tag.trim())
        .filter(tag => tag)
      const setMoods = (): string => {
        if (stateMoods.includes(newTag)) {
          return stateMoods.filter(tag => tag !== newTag).join(', ')
        } else {
          return [...stateMoods, newTag].join(', ')
        }
      }
      return {
        formState: {
          ...state.formState,
          [inputType]: setMoods(),
        },
      }
    }),
  setTagFromString: (value: string, inputType: InputType) =>
    set(state => {
      const tagsArray = value
        .split(',')
        .map(tag => tag && tag.trim())
        .filter(tag => tag)
      const stateMoods = state.formState[inputType]
        .split(',')
        .map(tag => tag && tag.trim())
        .filter(tag => tag)
      const diff = _.difference(tagsArray, stateMoods)
      const newStateMoods = (): string => {
        if (tagsArray.length > stateMoods.length && diff.length > 0) {
          if (stateMoods.length === 0) {
            return diff.join('')
          }
          return [...stateMoods, diff].join(', ')
        }
        if (tagsArray.length < stateMoods.length && diff.length > 0) {
          return _.pullAll(stateMoods, diff).join('')
        }
        return value
      }
      return {
        formState: {
          ...state.formState,
          [inputType]: newStateMoods(),
        },
      }
    }),
  setAllData: data => {
    set(state => ({
      formState: {
        ...state.formState,
        title: data.title,
        moodTags: data.mood,
        object: data.object,
        surrounding: data.surrounding,
        coverDescription: data.coverDescription,
        isLoFi: data.isLoFi,
      },
    }))
  },
}))
