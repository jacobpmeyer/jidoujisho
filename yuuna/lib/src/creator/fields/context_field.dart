import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:yuuna/creator.dart';
import 'package:yuuna/dictionary.dart';
import 'package:yuuna/models.dart';

/// Returns information about the current context in human-readable format
class ContextField extends Field {
  /// Initialise this field with the predetermined and hardset values.
  ContextField._privateConstructor()
      : super(
          uniqueKey: key,
          label: 'Context',
          description: 'Additional information on source media.',
          icon: Icons.perm_media,
        );

  /// Get the singleton instance of this field.
  static ContextField get instance => _instance;

  static final ContextField _instance = ContextField._privateConstructor();

  /// The unique key for this field.
  static const String key = 'context';

  @override
  String? onCreatorOpenAction({
    required BuildContext context,
    required WidgetRef ref,
    required AppModel appModel,
    required CreatorModel creatorModel,
    required DictionaryTerm dictionaryTerm,
    required List<DictionaryMetaEntry> metaEntries,
    required bool creatorJustLaunched,
  }) {
    if (appModel.currentMediaItem != null) {
      return appModel.currentMediaItem!.title;
    } else {
      return '';
    }
  }
}