import {create} from 'apisauce';
import Config from 'react-native-config';
import {AsyncStorage} from 'react-native';


const api = {
  auth: create({
    baseURL: Config.API_AUTH_URL,
    headers: { ContentType: 'application/json' },
  }),
  oauth: create({
    baseURL: Config.API_OAUTH_URL,
    headers: { ContentType: 'application/json' },
  }),
  workout: create({
    baseURL: Config.API_WORKOUT_URL,
    headers: { ContentType: 'application/json' },
  }),
  student: create({
    baseURL: Config.API_STUDENT_URL,
    headers: { ContentType: 'application/json' },
  }),
  teacher: create({
    baseURL: Config.API_TEACHER_URL,
    headers: { ContentType: 'application/json' },
  }),
  gym: create({
    baseURL: Config.API_GYM_URL,
    headers: { ContentType: 'application/json' },
  }),
  muscle_group: create({
    baseURL: Config.API_MUSCLE_GROUP_URL,
    headers: { ContentType: 'application/json' },
  }),
  invite: create({
    baseURL: Config.API_INVITE_URL,
    headers: { ContentType: 'application/json' },
  }),
  exercise: create({
    baseURL: Config.API_EXERCISE_URL,
    headers: { ContentType: 'application/json' },
  }),
  equipment: create({
    baseURL: Config.API_EQUIPMENT_URL,
    headers: { ContentType: 'application/json' },
  }),
  goal: create({
    baseURL: Config.API_GOAL_URL,
    headers: { ContentType: 'application/json' },
  }),
  files: create({
    baseURL: Config.API_FIlES_URL,
    headers: { ContentType: 'application/json' },
  }),
};

api.auth.addAsyncRequestTransform(request => async () => {
  const token = await AsyncStorage.getItem('@CodeApi:token');

  // TODO change to used Basic authentication

  if (token)
    request.headers['Authorization'] = `Bearer ${token}`;
});

api.auth.addResponseTransform(response => {
  if (!response.ok) throw response;
});

api.workout.addAsyncRequestTransform(request => async () => {
  const token = await AsyncStorage.getItem('@CodeApi:token');

  if (token)
    request.headers['Authorization'] = `Bearer ${token}`;
});

api.workout.addResponseTransform(response => {
  if (!response.ok) throw response;
});

api.student.addAsyncRequestTransform(request => async () => {
  const token = await AsyncStorage.getItem('@CodeApi:token');

  if (token)
    request.headers['Authorization'] = `Bearer ${token}`;
});

api.student.addResponseTransform(response => {
  if (!response.ok) throw response;
});

api.gym.addAsyncRequestTransform(request => async () => {
  const token = await AsyncStorage.getItem('@CodeApi:token');

  if (token)
    request.headers['Authorization'] = `Bearer ${token}`;
});

api.gym.addResponseTransform(response => {
  if (!response.ok) throw response;
});

api.teacher.addAsyncRequestTransform(request => async () => {
  const token = await AsyncStorage.getItem('@CodeApi:token');

  if (token)
    request.headers['Authorization'] = `Bearer ${token}`;
});

api.teacher.addResponseTransform(response => {
  if (!response.ok) throw response;
});


api.muscle_group.addAsyncRequestTransform(request => async () => {
  const token = await AsyncStorage.getItem('@CodeApi:token');

  if (token)
    request.headers['Authorization'] = `Bearer ${token}`;
});

api.muscle_group.addResponseTransform(response => {
  if (!response.ok) throw response;
});


api.invite.addAsyncRequestTransform(request => async () => {
  const token = await AsyncStorage.getItem('@CodeApi:token');

  if (token)
    request.headers['Authorization'] = `Bearer ${token}`;
});

api.invite.addResponseTransform(response => {
  if (!response.ok) throw response;
});


api.exercise.addAsyncRequestTransform(request => async () => {
  const token = await AsyncStorage.getItem('@CodeApi:token');

  if (token)
    request.headers['Authorization'] = `Bearer ${token}`;
});

api.exercise.addResponseTransform(response => {
  if (!response.ok) throw response;
});

api.equipment.addAsyncRequestTransform(request => async () => {
  const token = await AsyncStorage.getItem('@CodeApi:token');

  if (token)
    request.headers['Authorization'] = `Bearer ${token}`;
});

api.equipment.addResponseTransform(response => {
  if (!response.ok) throw response;
});

api.goal.addAsyncRequestTransform(request => async () => {
  const token = await AsyncStorage.getItem('@CodeApi:token');

  if (token)
    request.headers['Authorization'] = `Bearer ${token}`;
});

api.goal.addResponseTransform(response => {
  if (!response.ok) throw response;
});

api.files.addAsyncRequestTransform(request => async () => {
  const token = await AsyncStorage.getItem('@CodeApi:token');

  if (token)
    request.headers['Authorization'] = `Bearer ${token}`;
});

api.files.addResponseTransform(response => {
  if (!response.ok) throw response;
});


export default api;
