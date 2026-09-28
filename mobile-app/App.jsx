import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import DashboardScreen from './src/screens/DashboardScreen';
import SensorScreen from './src/screens/SensorScreen';
import SettingScreen from './src/screens/SettingScreen';

const Tab = createBottomTabNavigator();

const temaGelap = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#22C55E',
    accent: '#3B82F6',
    background: '#0F172A',
    surface: '#1E293B',
    text: '#F1F5F9',
    placeholder: '#64748B',
    backdrop: '#0F172A80',
    notification: '#EF4444',
    onSurface: '#F1F5F9',
    elevation: {
      level0: '#0F172A',
      level1: '#1E293B',
      level2: '#334155',
      level3: '#475569',
    },
  },
};

const App = () => {
  return (
    <PaperProvider theme={temaGelap}>
      <StatusBar barStyle="light-content" backgroundColor="#0F172A" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#0F172A',
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 1,
              borderBottomColor: '#1E293B',
            },
            headerTintColor: '#F1F5F9',
            headerTitleStyle: {
              fontWeight: '700',
              fontSize: 18,
            },

            tabBarStyle: {
              backgroundColor: '#0F172A',
              borderTopWidth: 1,
              borderTopColor: '#1E293B',
              height: 60,
              paddingBottom: 8,
              paddingTop: 4,
            },
            tabBarActiveTintColor: '#22C55E',
            tabBarInactiveTintColor: '#64748B',
            tabBarLabelStyle: {
              fontSize: 11,
              fontWeight: '600',
            },
          }}
        >

          <Tab.Screen
            name="Dashboard"
            component={DashboardScreen}
            options={{
              title: '🌿 Dashboard',
              tabBarLabel: 'Dashboard',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="view-dashboard" color={color} size={size} />
              ),
            }}
          />

          <Tab.Screen
            name="Sensor"
            component={SensorScreen}
            options={{
              title: '📡 Sensor',
              tabBarLabel: 'Sensor',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="access-point" color={color} size={size} />
              ),
            }}
          />

          <Tab.Screen
            name="Setting"
            component={SettingScreen}
            options={{
              title: '⚙️ Pengaturan',
              tabBarLabel: 'Setting',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="cog" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
