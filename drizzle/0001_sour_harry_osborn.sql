CREATE TABLE `match` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` integer NOT NULL,
	`match_name` text NOT NULL,
	`match_sport` text NOT NULL,
	`match_location` text NOT NULL,
	`match_timings` text,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);
