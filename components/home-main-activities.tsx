import { Pressable, StyleSheet, Text, View } from "react-native";

import {
  ACCENT_LIME,
  BACKGROUND_PAGE,
  BORDER_SUBTLE,
  Fonts,
  SURFACE_MUTED,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
} from "@/constants/theme";

type FocusActivity = {
  id: string;
  emoji: string;
  title: string;
  detail: string;
};

type Props = {
  todoCountToday: number;
  onOpenActivity: (activityId: string) => void;
  onQuickComplete: (activityId: string) => void;
};

const BASE_ACTIVITIES: FocusActivity[] = [
  {
    id: "physical",
    emoji: "🏃",
    title: "Physical activity",
    detail: "Running for 20-30 minutes",
  },
  {
    id: "hydrate",
    emoji: "💧",
    title: "Hydration",
    detail: "1L, 2L, or 3L water target",
  },
  {
    id: "todo",
    emoji: "✅",
    title: "Todo focus",
    detail: "Keep your top tasks visible",
  },
  {
    id: "recovery",
    emoji: "🧘",
    title: "Recovery",
    detail: "Breathing or stretch break",
  },
];

export function HomeMainActivities({
  todoCountToday,
  onOpenActivity,
  onQuickComplete,
}: Props) {
  const todoText =
    todoCountToday > 0
      ? `${todoCountToday} task${todoCountToday === 1 ? "" : "s"} planned today`
      : "Add your first task for today";

  return (
    <View style={styles.shell}>
      <Text style={styles.title}>Main Activities</Text>
      <Text style={styles.subtitle}>Keep these 4 priorities at the center of your day.</Text>

      <View style={styles.grid}>
        {BASE_ACTIVITIES.map((item) => (
          <Pressable
            key={item.id}
            onPress={() => onOpenActivity(item.id)}
            style={({ pressed }) => [
              styles.activityCard,
              pressed && styles.activityCardPressed,
            ]}
          >
            <Text style={styles.emoji}>{item.emoji}</Text>
            <Text style={styles.activityTitle}>{item.title}</Text>
            <Text style={styles.activityDetail}>
              {item.id === "todo" ? todoText : item.detail}
            </Text>
            <Pressable
              onPress={() => onQuickComplete(item.id)}
              style={({ pressed }) => [
                styles.completePill,
                pressed && styles.completePillPressed,
              ]}
              accessibilityLabel={`Quick complete ${item.title}`}
            >
              <Text style={styles.completePillText}>Quick complete</Text>
            </Pressable>
          </Pressable>
        ))}
      </View>

      <View style={styles.hydrationRow}>
        <Text style={styles.hydrationLabel}>Hydration quick goals:</Text>
        <View style={styles.goalsWrap}>
          <Text style={styles.goalPill}>1L</Text>
          <Text style={[styles.goalPill, styles.goalPillActive]}>2L</Text>
          <Text style={styles.goalPill}>3L</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shell: {
    backgroundColor: SURFACE_MUTED,
    borderRadius: 28,
    padding: 16,
    gap: 12,
  },
  title: {
    fontSize: 18,
    fontFamily: Fonts.semibold,
    color: TEXT_PRIMARY,
    textAlign: "center",
    letterSpacing: -0.25,
  },
  subtitle: {
    fontSize: 13,
    fontFamily: Fonts.medium,
    color: TEXT_SECONDARY,
    textAlign: "center",
    marginTop: -4,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10,
  },
  activityCard: {
    width: "48.5%",
    backgroundColor: BACKGROUND_PAGE,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: BORDER_SUBTLE,
    padding: 12,
    alignItems: "center",
    minHeight: 122,
  },
  activityCardPressed: {
    opacity: 0.9,
  },
  emoji: {
    fontSize: 22,
    marginBottom: 8,
  },
  activityTitle: {
    fontSize: 14,
    fontFamily: Fonts.semibold,
    color: TEXT_PRIMARY,
    textAlign: "center",
  },
  activityDetail: {
    marginTop: 6,
    fontSize: 12,
    fontFamily: Fonts.sans,
    color: TEXT_SECONDARY,
    textAlign: "center",
    lineHeight: 16,
  },
  completePill: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 999,
    backgroundColor: "rgba(199, 244, 50, 0.22)",
    borderWidth: 1,
    borderColor: ACCENT_LIME,
  },
  completePillPressed: {
    opacity: 0.8,
  },
  completePillText: {
    fontSize: 11,
    fontFamily: Fonts.semibold,
    color: TEXT_PRIMARY,
  },
  hydrationRow: {
    backgroundColor: BACKGROUND_PAGE,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: BORDER_SUBTLE,
    padding: 12,
    gap: 8,
  },
  hydrationLabel: {
    fontSize: 12,
    fontFamily: Fonts.medium,
    color: TEXT_SECONDARY,
    textAlign: "center",
  },
  goalsWrap: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },
  goalPill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: SURFACE_MUTED,
    color: TEXT_SECONDARY,
    fontSize: 12,
    fontFamily: Fonts.semibold,
    overflow: "hidden",
  },
  goalPillActive: {
    backgroundColor: ACCENT_LIME,
    color: TEXT_PRIMARY,
  },
});
