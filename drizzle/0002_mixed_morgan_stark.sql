PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_match` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` integer NOT NULL,
	`match_name` text NOT NULL,
	`match_sport` text NOT NULL,
	`match_location` text NOT NULL,
	`match_timings` text,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
INSERT INTO `__new_match`("id", "user_id", "match_name", "match_sport", "match_location", "match_timings") SELECT "id", "user_id", "match_name", "match_sport", "match_location", "match_timings" FROM `match`;--> statement-breakpoint
DROP TABLE `match`;--> statement-breakpoint
ALTER TABLE `__new_match` RENAME TO `match`;--> statement-breakpoint
PRAGMA foreign_keys=ON;